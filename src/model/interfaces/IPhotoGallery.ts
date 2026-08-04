export interface PhotoGallery {
  id: number;
  image_url: string;
}

export interface IPhotoGalleryRepository {
  getAllImages(query_params?: {
    limit?: number;
    offset?: number;
  }): Promise<PhotoGallery[] | null>;

  getImageById(query_params: {
    id: number;
    category: string;
  }): Promise<PhotoGallery | null>;

  getImagesByCategory(query_params: {
    category: string;
    limit?: number;
    offset?: number;
  }): Promise<PhotoGallery[] | null>;

  getImagesCountByCategory(query_params: {
    category: string;
  }): Promise<{ total: number } | null>;

  insertImage(data: { category: string; image_url: string }): Promise<null>;

  deleteImage(query_params: { id: number; category: string }): Promise<null>;
}
