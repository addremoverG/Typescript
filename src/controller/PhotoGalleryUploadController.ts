import { Request, Response } from 'express';
import { repositoryRegistry } from '../model/RepositoryRegistry';

export class PhotoGalleryUploadController {
  static uploadPhoto() {
    return async (req: Request, res: Response): Promise<void> => {
      const category =
        typeof req.body?.category === 'string' ? req.body.category : '';
      const file = (req as Request & { file?: { filename?: string } }).file;

      if (!category || !file?.filename) {
        res.status(400).send('Category or file is missing');
        return;
      }

      const repo = repositoryRegistry.get('photo_gallery') as any;
      await repo.insertImage({
        category,
        image_url: file.filename,
      });

      res.redirect(`/photo_gallery?category=${category}&page=1`);
    };
  }
}
