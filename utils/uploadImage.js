const fs = require('fs');
const AWS = require('aws-sdk');
const jimp = require('jimp')

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  })

  module.exports = async (file_name, file_size, callback) => {
    if (file_size > 200000) {	
      const image_path = "./images/" + file_name;
      const image = await jimp.read(image_path);
      let image_quality = Math.max(Math.min(200000 * 100 / file_size, 100), 10);
      await image.quality(image_quality);
      await image.writeAsync(image_path)
    }
  
    const file_content = fs.readFileSync("./images/" + file_name);	
  
    const params = {	
      Bucket: process.env.AWS_BUCKET_NAME,	
      Key: file_name,	
      Body: file_content,	
      ContentType: 'image/jpg',	
      ACL: 'public-read'	
    };	
    
    s3.upload(params, (err, data) => {	
      if (err) return callback(err);	
    
      fs.unlink("./images/" + file_name, err => {	
        return callback(err, data.Location);	
      });
    });
  }