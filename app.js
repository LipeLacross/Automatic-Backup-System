const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const fs = require('fs');
const app = express();
const indexRouter = require('./routes/index');

// Configura o diretório de visualizações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Configura o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configura o body-parser para processar formulários
app.use(bodyParser.urlencoded({ extended: false }));

// Configura o AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Configura o multer para uploads usando o S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + path.extname(file.originalname));
    }
  })
});

// Usa as rotas definidas em routes/index.js
app.use('/', indexRouter);

// Rota para realizar backup (upload para S3)
app.post('/backup', upload.single('file'), (req, res) => {
  res.send('Backup realizado com sucesso!');
});

// Rota para restaurar arquivo
app.get('/restore/:filename', (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.params.filename
  };
  s3.getObject(params, (err, data) => {
    if (err) {
      res.status(500).send('Erro ao recuperar o arquivo.');
    } else {
      res.send(data.Body);
    }
  });
});

// Define a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
