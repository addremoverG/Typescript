import { Request, Response } from "express";
import { IUserRepository } from "../model/IUserRepository";
import { DBPageView } from "../view/pages/getDBdata";

export class DbController {
  constructor(private userRepo: IUserRepository) {}

  getDBDataPage() {
    return async (req: Request, res: Response): Promise<void> => {
      const users = await this.userRepo.getAllUsers();
      res.send(new DBPageView().renderPage({ ...res.locals, users }));
    };
  }
}
