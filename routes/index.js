const express = require('express');
const path = require('path');
const { uploadFile } = require('../services/backupService');
const { downloadFile } = require('../services/restoreService');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Pasta para arquivos temporários

// Página inicial
router.get('/', (req, res) => {
  res.render('index', { title: 'Sistema de Backup Automático' });
});

// Rota para fazer upload de backup
router.post('/backup', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  uploadFile(filePath)
      .then(() => res.send('Backup realizado com sucesso!'))
      .catch(err => res.status(500).send('Erro ao realizar backup: ' + err.message));
});

// Rota para restaurar backup
router.get('/restore/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const downloadPath = path.join('restored', fileName); // Pasta para arquivos restaurados
  downloadFile(fileName, downloadPath)
      .then(() => res.send('Backup restaurado com sucesso!'))
      .catch(err => res.status(500).send('Erro ao restaurar backup: ' + err.message));
});

module.exports = router;
