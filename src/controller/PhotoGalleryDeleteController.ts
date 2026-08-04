import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { repositoryRegistry } from '../model/RepositoryRegistry';

export class PhotoGalleryDeleteController {
  static deletePhoto() {
    return async (req: Request, res: Response): Promise<void> => {
      const id = Number(req.body?.id);
      const category =
        typeof req.body?.category === 'string' ? req.body.category : '';
      const repo = repositoryRegistry.get('photo_gallery') as any;
      const photo = await repo.getImageById({ id, category });

      if (photo?.image_url) {
        const filePath = path.join(
          process.cwd(),
          'public',
          'uploads',
          'photo_gallery',
          category,
          photo.image_url,
        );

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      await repo.deleteImage({ id, category });
      res.redirect(`/photo_gallery?category=${category}&page=1`);
    };
  }
}
