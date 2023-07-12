import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto, { randomBytes } from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

export default async function fileUpload() {
  const region = 'ap-south-1';
  const bucketName = 'canteenpro.image';

  const accessKeyId = process.env.ACCESSKEY_S3_SECERET;
  const secretAccessKey = process.env.SECRETKEY_S3;

  const s3Client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const rowBytes = await randomBytes(16)

  const imageName = rowBytes.toString('hex');
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: imageName,
  });

  const uploadURL = await getSignedUrl(s3Client, command, { expiresIn: 60 });
  return uploadURL;
}
