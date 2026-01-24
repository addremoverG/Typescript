import { View } from '../abstractView';

export class ProductsPageView extends View {
  static title: string = 'Products Page';
  static innerBody: string = `
  <div class="products_page">
  <h1>Products here</h1>
  </div>`;
}
