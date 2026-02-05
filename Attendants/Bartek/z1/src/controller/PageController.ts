import { Request, Response } from 'express';
// import { Views } from '../view/Views';
import { SiteBuilder } from '../views/pages/SiteBuilder';
import { PG } from '../model/Pg';

export class PageController {
  static mainPage() {
    return (req: Request, res: Response) => {
      res.send(new SiteBuilder('Kremówki papieskie').generateView());
    };
  }

  static getDataPage() {
    return async (req: Request, res: Response) => {
      // const data = dummyData;
      const data = await PG.getInstance().queryDB();
      // res.send(Views.getDataPage(data));
    };
  }
}
