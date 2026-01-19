import { Model } from "../model/Model";
import { Views } from "../view/MainPage";
import { Request, Response } from "express";

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getMainPage());
    };
  }
  static showCredentials() {
    return (req: Request, res: Response) => {
      const { fname, lname } = req.body;
      if (Model.validateUser(fname, lname)) {
        res.send(Views.showCredentialsPage(String(fname), String(lname)));
      } else {
        res.send(Views.failedValidationPage());
      }
    };
  }

  static test() {
    return (req: Request, res: Response) => {
      const query = req.query;
      const body = req.body;
      console.log('Query', query);
      console.log('Body', body);
    };
  }
}
