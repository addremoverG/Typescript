import { View } from '../abstractView';

export class PhotoGalleryPageView extends View {
  title: string = 'Photo Gallery Page';
  getBody(locals?: Record<string, any>): string {
    const images: {
      id: number;
      image_url: string;
      category: string;
    }[] = locals?.photo_gallery ?? [];
    const selectedCategory = locals?.selectedCategory ?? '';
    const currentPage = Number(locals?.currentPage ?? 1);
    const totalPages = Number(locals?.totalPages ?? 1);
    const showUploadForm = Boolean(locals?.showUploadForm);

    const rows = images
      .map((image) => {
        const imageSrc =
          '/uploads/photo_gallery/' +
          image.category +
          '/' +
          image.image_url.replace(/^\/+/, '');

        return `
          <div class="photo_gallery_image">
            <a href="/dbdata/photo_gallery/${image.category}/${image.id}" target="_self">
              <img src="${encodeURI(imageSrc)}" alt="Image ${image.id}" />
            </a>
            <div class="photo_gallery_image_meta">
              <span>id: ${image.id}, category: ${image.category}</span>
              <form action="/photo_gallery/delete" method="post" class="photo_gallery_delete_form">
                <input type="hidden" name="id" value="${image.id}" />
                <input type="hidden" name="category" value="${image.category}" />
                <button type="submit" title="Delete photo" aria-label="Delete photo">✕</button>
              </form>
            </div>
          </div>
        `;
      })
      .join('');

    const pageLinks = Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      const isActive = pageNumber === currentPage;
      const activeClass = isActive ? 'style="font-weight: bold;"' : '';
      return `<a href="/photo_gallery?category=${selectedCategory}&page=${pageNumber}" ${activeClass}>${pageNumber}</a>`;
    }).join(' ');

    const uploadForm = `
      <form action="/photo_gallery/upload" method="post" enctype="multipart/form-data" class="photo_gallery_upload_form">
        <label for="photo_gallery_category">Category</label>
        <select id="photo_gallery_category" name="category">
          <option value="standing">Standing</option>
          <option value="seating">Seating</option>
          <option value="interesting">Interesting</option>
        </select>
        <input type="file" name="photo" accept="image/*" required>
        <button type="submit">Add photo</button>
      </form>
    `;

    return `
      <div class="photo_gallery_page">
        <div class="photo_gallery_menu">
          <h3>Photo Gallery Menu</h3>
          <ul>
            <li><a href="/photo_gallery?category=standing&page=1">Standing</a></li>
            <li><a href="/photo_gallery?category=seating&page=1">Seating</a></li>
            <li><a href="/photo_gallery?category=interesting&page=1">Interesting</a></li>
            <li><a href="/photo_gallery?mode=upload">Add photo</a></li>
          </ul>
        </div>

        <div class="photo_gallery_content">
          <h3>Photo Gallery Content</h3>
          ${showUploadForm ? uploadForm : `<div class="photo_gallery_images">${rows || '<h3>Choose category</h3>'}</div>`}

          ${selectedCategory && !showUploadForm ? `<div class="photo_gallery_pagination">${pageLinks}</div>` : ''}
        </div>
      </div>`;
  }
}
