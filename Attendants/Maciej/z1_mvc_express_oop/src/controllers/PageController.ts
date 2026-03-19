import { Request, Response } from 'express';
import { SiteBuilder } from '../views/pages/SiteBuilder';

export class PageController {
  
  static mainPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Strona Główna').generateView());
  }

  static offerPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Oferta').generateView('offer'));
  }

  static companyHistory() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Historia Firmy').generateView('history'));
  }

  static boardPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Zarząd').generateView('board'));
  }

  static presentationPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Prezentacja').generateView('presentation'));
  }

  static certificatePage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Certyfikaty').generateView('certificate'));
  }

  static mediaPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Piszą o nas').generateView('media'));
  }

  static mapPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Mapa').generateView('map'));
  }

  static contactPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Kontakt').generateView('contact'));
  }
}