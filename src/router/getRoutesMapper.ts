import { PageController } from '../controller/PageController';
import { DbController } from '../controller/DbController';
import { getRegistry } from './getRouteRegistry';
import '../model/repositoriesMapper';

getRegistry.register('/', PageController.getMainPage());
getRegistry.register('/contacts', PageController.getContactPage());
getRegistry.register('/map', PageController.getMapPage());
getRegistry.register(
  '/company_history',
  PageController.getCompanyHistoryPage(),
);
getRegistry.register('/management', PageController.getManagementPage());
getRegistry.register('/about', PageController.getAboutPage());
getRegistry.register('/products', PageController.getProductsPage());
getRegistry.register('/photo_gallery', PageController.getPhotoGalleryPage());
getRegistry.register(
  '/company_presentation',
  PageController.getCompanyPresentationPage(),
);
getRegistry.register('/css', PageController.getCssPage());
getRegistry.register(
  '/dbdata/users/all',
  DbController.getUsersData('users', 'getAllUsers'),
);
getRegistry.register(
  '/dbdata/products/all',
  DbController.getProductsData('products', 'getAllProducts'),
);
getRegistry.register(
  '/dbdata/products/:id',
  DbController.getProductsData('products', 'getProductById'),
);

getRegistry.register(
  '/dbdata/photo_gallery/all',
  DbController.getPhotoGalleryData('photo_gallery', 'getAllImages'),
);

getRegistry.register(
  '/dbdata/photo_gallery/:category/all',
  DbController.getPhotoGalleryData('photo_gallery', 'getImagesByCategory'),
);

getRegistry.register(
  '/api/photo_gallery/:category',
  DbController.getPhotoGalleryJsonData('photo_gallery', 'getImagesByCategory'),
);

getRegistry.register(
  '/dbdata/photo_gallery/:category/:id',
  DbController.getPhotoGalleryData('photo_gallery', 'getImageById'),
);
