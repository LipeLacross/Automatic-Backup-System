// config/awsConfig.js
const AWS = require('aws-sdk');

// Configuração das credenciais AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1' // ou a região que você está usando
});

const s3 = new AWS.S3();

module.exports = s3;
