import { Request, Response } from 'express';
import { ContactsPageView } from '../view/pages/contactsPage';
import { MapPageView } from '../view/pages/mapPage';
import { MainPageView } from '../view/pages/mainPage';
import { CompanyHistoryPageView } from '../view/pages/companyHistoryPage';
import { ManagementPageView } from '../view/pages/managementPage';
import { AboutPageView } from '../view/pages/aboutPage';
import { ProductsPageView } from '../view/pages/productsPage';
import { CertificatePageView } from '../view/pages/certificatePage';
import { CompanyPresentationPageView } from '../view/pages/CompanyPresentation';
import { CssPageView } from '../view/pages/cssPage';

declare module 'express-session' {
  interface SessionData {
    color: string;
  }
}

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(new MainPageView().renderPage(res.locals));
    };
  }

  static getContactPage() {
    return (req: Request, res: Response) => {
      res.send(new ContactsPageView().renderPage(res.locals));
    };
  }

  static getMapPage() {
    return (req: Request, res: Response) => {
      res.send(new MapPageView().renderPage(res.locals));
    };
  }

  static getCompanyHistoryPage() {
    return (req: Request, res: Response) => {
      res.send(new CompanyHistoryPageView().renderPage(res.locals));
    };
  }

  static getManagementPage() {
    return (req: Request, res: Response) => {
      res.send(new ManagementPageView().renderPage(res.locals));
    };
  }

  static getAboutPage() {
    return (req: Request, res: Response) => {
      res.send(new AboutPageView().renderPage(res.locals));
    };
  }

  static getProductsPage() {
    return (req: Request, res: Response) => {
      res.send(new ProductsPageView().renderPage(res.locals));
    };
  }

  static getCertificatePage() {
    return (req: Request, res: Response) => {
      res.send(new CertificatePageView().renderPage(res.locals));
    };
  }

  static getCompanyPresentationPage() {
    return (req: Request, res: Response) => {
      res.send(new CompanyPresentationPageView().renderPage(res.locals));
    };
  }

  static getCssPage() {
    return (req: Request, res: Response) => {
      res.send(new CssPageView().renderPage(res.locals));
    };
  }
}
