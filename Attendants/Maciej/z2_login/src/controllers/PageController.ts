import { Request, Response } from 'express';
import { SiteBuilder } from '../views/pages/SiteBuilder';

export class PageController {

  static mainPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Strona Główna', res.locals.user).generateView('home', req.session.bgColor));
  }

  static offerPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Oferta', res.locals.user).generateView('offer', req.session.bgColor));
  }

  static companyHistory() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Historia Firmy', res.locals.user).generateView('history', req.session.bgColor));
  }

  static boardPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Zarząd', res.locals.user).generateView('board', req.session.bgColor));
  }

  static presentationPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Prezentacja', res.locals.user).generateView('presentation', req.session.bgColor));
  }

  static certificatePage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Certyfikaty', res.locals.user).generateView('certificate', req.session.bgColor));
  }

  static mediaPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Piszą o nas', res.locals.user).generateView('media', req.session.bgColor));
  }

  static mapPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Mapa', res.locals.user).generateView('map', req.session.bgColor));
  }

  static contactPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Kontakt', res.locals.user).generateView('contact', req.session.bgColor));
  }

  static appearancePage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Wygląd', res.locals.user).generateView('appearance', req.session.bgColor));
  }

  static loginPage() {
    return (req: Request, res: Response) => {
      if (res.locals.user) return res.redirect('/z1');
      res.send(new SiteBuilder('Logowanie', null).generateView('login', req.session.bgColor));
    };
  }

  static handleLogin() {
    return (req: Request, res: Response) => {
      const { username, password } = req.body;

      // Prosta weryfikacja — hasło "admin" dla każdego użytkownika.
      // Tutaj można podłączyć bazę danych.
      if (username && password === 'admin') {
        req.session.user = username;
        return res.redirect('/z1');
      }

      res.send(new SiteBuilder('Logowanie', null).generateView('login', req.session.bgColor));
    };
  }

  static handleLogout() {
    return (req: Request, res: Response) => {
      req.session.destroy((err) => {
        if (err) return res.redirect('/z1');
        res.clearCookie('connect.sid');
        res.redirect('/z1');
      });
    };
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
