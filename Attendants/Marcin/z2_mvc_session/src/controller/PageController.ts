import { PG } from '../model/Pg';
import { Views } from '../view/Views';
import { Request, Response } from 'express';
import { successHtml } from '../view/successTemplate';
import { successLogout } from '../view/logoutTemplate';

export class PageController {
  static getHomePage() {
    return (req: Request, res: Response) => {
      const authorise = res.locals.authorise;
      res.send(Views.getHomePage(authorise));
    };
  }

  static getAboutPage() {
    return (req: Request, res: Response) => {
      const authorise = res.locals.authorise;
      res.send(Views.getAboutPage(authorise));
    };
  }

  static getMapPage() {
    return (req: Request, res: Response) => {
      const authorise = res.locals.authorise;
      res.send(Views.getMapPage(authorise));
    };
  }

  static getPortfolioPage() {
    return (req: Request, res: Response) => {
      const authorise = res.locals.authorise;
      res.send(Views.getPortfolioPage(authorise));
    };
  }

  static getContactPage() {
    return (req: Request, res: Response) => {
      const authorise = res.locals.authorise;
      res.send(Views.getContactPage(authorise));
    };
  }

  static getStylePage() {
    return (req: Request, res: Response) => {
      const authorise = res.locals.authorise;
      res.send(Views.getStylePage(authorise));
    };
  }

  static getLoginPage() {
    return (req: Request, res: Response) => {
      res.send(Views.getLoginPage());
    };
  }

  static handleLogout(req: Request, res: Response) {
    const authorise = res.locals.authorise;
    req.session.destroy((err) => {
      if (err) return res.redirect('/');
      // 2. Opcjonalnie: wyczyść ciasteczko sesyjne w przeglądarce
      res.clearCookie('connect.sid'); // 'connect.sid' to domyślna nazwa ciasteczka Express
      // 3. Przekieruj lub wyślij swój HTML z timerem
      res.send(successLogout(authorise));
      // res.send(`
      //   <h1>Zostałeś wylogowany</h1>
      //   <p>Za chwilę wrócisz na stronę główną...</p>
      //   <meta http-equiv="refresh" content="2;url=/" />
      // `);
    });
  }

  static handleSubmitData(req: Request, res: Response) {
    const { name, email } = req.body;
    req.session.authorise = name;
    res.send(successHtml(name));
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
