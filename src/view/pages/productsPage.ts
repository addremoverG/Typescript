import path from 'path';
import { View } from '../abstractView';

export class ProductsPageView extends View {
  title: string = 'Products Page';
  getBody(locals?: Record<string, any>): string {
    const products: {
      id: number;
      name: string;
      image_url: string;
      price: number;
    }[] = locals?.products ?? [];
    const rows = products
      .map((product) => {
        const imageSrc = '/' + product.image_url.replace(/^\/+/, '');
        return `
    <tr>
      <td><a href="/dbdata/products/${product.id}">${product.id}</a></td>
      <td>${product.name}</td>
      <td><img src="${encodeURI(imageSrc)}" alt="${product.name}" width="100" /></td>
      <td>${product.price}</td>
    </tr>`;
      })
      .join('');

    return `
    <div class="products_page">
    <h3>Here are the Products data:</h3>
    <table>
      <tr>
        <th>Id</th>  
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
      </tr>
      ${rows}
    </table>
  </div>`;
  }
}
