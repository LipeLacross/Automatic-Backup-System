const s3 = require('../config/awsConfig');
const fs = require('fs');
const path = require('path');

const bucketName = 'your-bucket-name';

const downloadFile = (fileName, downloadPath) => {
    const params = {
        Bucket: bucketName,
        Key: fileName,
    };

    return s3.getObject(params).promise()
        .then(data => fs.writeFileSync(downloadPath, data.Body));
};

module.exports = { downloadFile };
