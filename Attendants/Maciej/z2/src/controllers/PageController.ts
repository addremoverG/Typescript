import { Request, Response } from 'express';
import { SiteBuilder } from '../views/pages/SiteBuilder';

export class PageController {
  
  static mainPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Strona Główna').generateView('home', req.session.bgColor));
  }

  static offerPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Oferta').generateView('offer', req.session.bgColor));
  }

  static companyHistory() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Historia Firmy').generateView('history', req.session.bgColor));
  }

  static boardPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Zarząd').generateView('board', req.session.bgColor));
  }

  static presentationPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Prezentacja').generateView('presentation', req.session.bgColor));
  }

  static certificatePage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Certyfikaty').generateView('certificate', req.session.bgColor));
  }

  static mediaPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Piszą o nas').generateView('media', req.session.bgColor));
  }

  static mapPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Mapa').generateView('map', req.session.bgColor));
  }

  static contactPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Kontakt').generateView('contact', req.session.bgColor));
  }
  
  static appearancePage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Wygląd').generateView('appearance', req.session.bgColor));
  }

  static changeBgColor() {
    return (req: Request, res: Response) => {
      if (req.session.bgColor === 'lightblue') {
        req.session.bgColor = '#f4f4f4';
      } else {
        req.session.bgColor = 'lightblue'; 
      }
      
      res.redirect('/z1/wyglad');
    };
  }
}