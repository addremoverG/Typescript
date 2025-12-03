import { Request, Response } from 'express';
import { Views } from '../view/Views';

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMainPage());
    };
  }
}
