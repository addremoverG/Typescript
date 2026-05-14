import { View } from '../abstractView';

export class ProductsPageView extends View {
  title: string = 'Products Page';
  getBody(): string {
    return `
  <div class="products_page">
  <h1>Products here</h1>
  </div>`;
}
}