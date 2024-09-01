const express = require('express');
const router = express.Router();

// Rota para a página principal
router.get('/', (req, res) => {
  res.render('index');
});

// Rota para realizar backup
router.post('/backup', (req, res) => {
  res.send('Backup iniciado!');
});

// Rota para restaurar arquivo
router.get('/restore/:filename', (req, res) => {
  // Aqui você pode adicionar o código para restaurar o arquivo do S3
});

module.exports = router;
