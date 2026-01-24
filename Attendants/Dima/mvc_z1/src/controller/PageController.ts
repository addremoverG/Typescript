import { Request, Response } from 'express';
import { ContactsPageView } from '../view/pages/contactsPage';
import { MapPageView } from '../view/pages/mapPage';
import { MainPageView } from '../view/pages/MainPage';
import { CompanyHistoryPageView } from '../view/pages/companyHistoryPage';
import { ManagementPageView } from '../view/pages/managementPage';
import { AboutPageView } from '../view/pages/aboutPage';
import { ProductsPageView } from '../view/pages/productsPage';
import { CertificatePageView } from '../view/pages/certificatePage';
import { CompanyPresentationPageView } from '../view/pages/CompanyPresentation';

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(MainPageView.renderPage());
    };
  }

  static getContactPage() {
    return (req: Request, res: Response) => {
      res.send(ContactsPageView.renderPage());
    };
  }

  static getMapPage() {
    return (req: Request, res: Response) => {
      res.send(MapPageView.renderPage());
    };
  }

  static getCompanyHistoryPage() {
    return (req: Request, res: Response) => {
      res.send(CompanyHistoryPageView.renderPage());
    };
  }

  static getManagementPage() {
    return (req: Request, res: Response) => {
      res.send(ManagementPageView.renderPage());
    };
  }

  static getAboutPage() {
    return (req: Request, res: Response) => {
      res.send(AboutPageView.renderPage());
    };
  }

  static getProductsPage() {
    return (req: Request, res: Response) => {
      res.send(ProductsPageView.renderPage());
    };
  }

  static getCertificatePage() {
    return (req: Request, res: Response) => {
      res.send(CertificatePageView.renderPage());
    };
  }

  static getCompanyPresentationPage() {
    return (req: Request, res: Response) => {
      res.send(CompanyPresentationPageView.renderPage());
    };
  }
}
