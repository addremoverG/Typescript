import { Request, Response } from "express";
import { Views } from "../view/Views";

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMainPage());
    };
  }

  static getMapPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMapPage());
    };
  }

  static getContactPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getContactPage());
    };
  }

  static getCompanyHistoryPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getCompanyHistoryPage());
    };
  }

  static getManagementPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getManagementPage());
    };
  }

  static getAboutPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getAboutPage());
    };
  }

  static getProductsPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getProductsPage());
    };
  }

  static getCertificatePage() {
    return (req: Request, res: Response) => {
      res.send(Views.getCertificatePage());
    };
  }

  static getCompanyPresentationPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getCompanyPresentationPage());
    };
  }
}
