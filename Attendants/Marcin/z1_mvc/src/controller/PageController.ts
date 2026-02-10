import { PG } from '../model/Pg';
import { Views } from '../view/Views';
import { Request, Response } from 'express';

export class PageController {
  static getHomePage() {
    return (req: Request, res: Response) => {
      res.send(Views.getHomePage());
    };
  }

  static getAboutPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getAboutPage());
    };
  }

  static getMapPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMapPage());
    };
  }

  static getPortfolioPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getPortfolioPage());
    };
  }

  static getContactPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getContactPage());
    };
  }

  // static getCredPage() {
  //   return (req: Request, res: Response) => {
  //     const { fname, lname } = req.query;
  //     res.send(Views.getCredPage(String(fname), String(lname)));
  //   };
  // }

  // static getDataPage() {
  //   return async (req: Request, res: Response) => {
  //     // const data = dummyData;
  //     const data = await PG.getInstance().queryDB();
  //     res.send(Views.getDataPage(data));
  //   };
  // }
}
