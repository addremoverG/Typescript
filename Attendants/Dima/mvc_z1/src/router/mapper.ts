import { PageController } from '../controller/PageController';
import { Request, Response } from 'express';

type PageHandler = () => (req: Request, res: Response) => void;

export const pageGetRoutes: Record<string, PageHandler> = {
  '/': PageController.getMainPage,
  '/contacts': PageController.getContactPage,
  '/map': PageController.getMapPage,
  '/company_history': PageController.getCompanyHistoryPage,
  '/management': PageController.getManagementPage,
  '/about': PageController.getAboutPage,
  '/products': PageController.getProductsPage,
  '/certificate': PageController.getCertificatePage,
  '/company_presentation': PageController.getCompanyPresentationPage,
  '/css': PageController.getCssPage,
};

export function resolveGetPageController(endpoint: string) {
  const handler = pageGetRoutes[endpoint];

  if (!handler) {
    throw new Error(`No controller found for endpoint: ${endpoint}`);
  }

  return handler();
}
