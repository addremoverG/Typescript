import { Request, Response } from 'express';
import { SiteBuilder } from '../views/pages/SiteBuilder';

export class PageController {
  static mainPage() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Main Page').generateView());
  }
  static companyHistory() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('History').generateView('history'));
  }
  static login() {
    return (req: Request, res: Response) =>
      res.send(new SiteBuilder('Login').generateView(''));
  }
}
