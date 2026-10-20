import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export class R2 {
  private static instance: R2;
  private client: S3Client;

  private constructor() {
    this.client = new S3Client({
      region: 'auto',
      endpoint: process.env.R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
      },
    });
  }

  static getInstance(): R2 {
    if (!R2.instance) {
      R2.instance = new R2();
    }
    return R2.instance;
  }

  async wyslijZdjecie(file: Express.Multer.File) {
    const nazwa = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    await this.client.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET as string,
        Key: nazwa,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );
    return `${process.env.R2_PUBLIC_URL}/${nazwa}`;
  }
}