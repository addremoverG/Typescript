import { Views } from '../view/Views';
import { Request, Response } from 'express';

export class PageController {
  static getHomePage() {
    return (req: Request, res: Response) => {
      res.send(Views.getHomePage());
    };
  }

  static getOfferPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getOfferPage());
    };
  }

  static getHistoryPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getHistoryPage());
    };
  }

  static getBoardPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getBoardPage());
    };
  }

  static getPresentationPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getPresentationPage());
    };
  }

  static getCertificatePage() {
    return (req: Request, res: Response) => {
      res.send(Views.getCertificatePage());
    };
  }

  static getMediaPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMediaPage());
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
}