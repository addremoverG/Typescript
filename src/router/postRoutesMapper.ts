import { postRegistry } from './postRouteRegistry';
import { CssController } from '../controller/CssController';
import { PhotoGalleryUploadController } from '../controller/PhotoGalleryUploadController';
import { PhotoGalleryDeleteController } from '../controller/PhotoGalleryDeleteController';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const photoGalleryUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      const category =
        typeof req.body?.category === 'string' ? req.body.category : 'standing';
      const uploadDir = path.join(
        process.cwd(),
        'public',
        'uploads',
        'photo_gallery',
        category,
      );

      fs.mkdirSync(uploadDir, { recursive: true });
      cb(null, uploadDir);
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

postRegistry.register('/set-color', CssController.setColor());
postRegistry.register('/reset-color', CssController.resetColor());
postRegistry.register('/photo_gallery/upload', [
  photoGalleryUpload.single('photo'),
  PhotoGalleryUploadController.uploadPhoto(),
]);
postRegistry.register(
  '/photo_gallery/delete',
  PhotoGalleryDeleteController.deletePhoto(),
);
