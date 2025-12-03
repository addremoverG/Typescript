import { PG } from '../model/Pg';
import { Views } from '../view/Views';
import { Request, Response } from 'express';

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMainPage());
    };
  }

  static getCredPage() {
    return (req: Request, res: Response) => {
      const { fname, lname } = req.query;
      res.send(Views.getCredPage(String(fname), String(lname)));
    };
  }

  static getDataPage() {
    return async (req: Request, res: Response) => {
      // const data = dummyData;
      const data = await PG.getInstance().queryDB();
      res.send(Views.getDataPage(data));
    };
  }
}
