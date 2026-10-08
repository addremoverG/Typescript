import { join } from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: join(__dirname, '..', 'public', 'images'),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage });