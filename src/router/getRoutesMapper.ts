import { PageController } from '../controller/PageController';
import { getRegistry } from './getRouteRegistry';
import { DbController } from '../controller/DbController';
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
getRegistry.register('/certificate', PageController.getCertificatePage());
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
