const s3 = require('../config/awsConfig');
const fs = require('fs');
const path = require('path');

const bucketName = 'your-bucket-name';

const uploadFile = (filePath) => {
    const fileContent = fs.readFileSync(filePath);
    const params = {
        Bucket: bucketName,
        Key: path.basename(filePath),
        Body: fileContent,
    };

    return s3.upload(params).promise();
};

module.exports = { uploadFile };
