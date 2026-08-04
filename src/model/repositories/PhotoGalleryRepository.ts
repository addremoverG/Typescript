import { IPhotoGalleryRepository } from '../interfaces/IPhotoGallery';
import { DB } from '../Pg';

export class PhotoGalleryRepository implements IPhotoGalleryRepository {
  private db = DB.getInstance().connection;

  getAllImages(query_params?: { limit?: number; offset?: number }) {
    const limit = query_params?.limit ?? 5;
    const offset = query_params?.offset ?? 0;
    return this.db.manyOrNone(
      'SELECT * FROM photo_gallery ORDER BY id LIMIT $1 OFFSET $2',
      [limit, offset],
    );
  }

  getImageById(query_params: { id: number; category: string }) {
    return this.db.oneOrNone(
      'SELECT * FROM photo_gallery WHERE id = $1 AND category = $2',
      [query_params.id, query_params.category],
    );
  }

  getImagesByCategory(query_params: {
    category: string;
    limit?: number;
    offset?: number;
  }) {
    const limit = query_params?.limit ?? 5;
    const offset = query_params?.offset ?? 0;
    return this.db.manyOrNone(
      'SELECT * FROM photo_gallery WHERE category = $1 ORDER BY id LIMIT $2 OFFSET $3',
      [query_params.category, limit, offset],
    );
  }

  getImagesCountByCategory(query_params: { category: string }) {
    return this.db.oneOrNone(
      'SELECT COUNT(*)::int AS total FROM photo_gallery WHERE category = $1',
      [query_params.category],
    );
  }

  insertImage(data: { category: string; image_url: string }) {
    return this.db.none(
      'INSERT INTO photo_gallery (category, image_url) VALUES ($1, $2)',
      [data.category, data.image_url],
    );
  }

  deleteImage(query_params: { id: number; category: string }) {
    return this.db.none(
      'DELETE FROM photo_gallery WHERE id = $1 AND category = $2',
      [query_params.id, query_params.category],
    );
  }
}
