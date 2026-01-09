import { Request, Response } from 'express';
import { Views } from '../view/Views';
import { PG } from '../model/Pg';

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMainPage());
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
