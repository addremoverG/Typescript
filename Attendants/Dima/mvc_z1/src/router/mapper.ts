import { PageController } from '../controller/PageController';
import { Request, Response } from 'express';

type PageHandler = () => (req: Request, res: Response) => void;

export const pageRoutes: Record<string, PageHandler> = {
  '/': PageController.getMainPage,
  '/contacts': PageController.getContactPage,
  '/map': PageController.getMapPage,
  '/company_history': PageController.getCompanyHistoryPage,
  '/management': PageController.getManagementPage,
  '/about': PageController.getAboutPage,
  '/products': PageController.getProductsPage,
  '/certificate': PageController.getCertificatePage,
  '/company_presentation': PageController.getCompanyPresentationPage,
};

export function resolvePageController(endpoint: string) {
  const handler = pageRoutes[endpoint];

  if (!handler) {
    throw new Error(`No controller found for endpoint: ${endpoint}`);
  }

  return handler();
}
