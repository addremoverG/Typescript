import { Request, Response } from 'express';
import { SiteBuilder } from '../views/pages/SiteBuilder';

export class PageController {
  static mainPage() {
    return (req: Request, res: Response) => {
      const savedColor = req.session.selectedColor || 'lightgrey'; //|| 'transparent'
      // console.log(req.session.authorise);
      const authorise = req.session.authorise;

      res.send(
        new SiteBuilder('Main Page', savedColor, authorise).generateView(),
      );
    };
  }
  static companyHistory() {
    return (req: Request, res: Response) => {
      const savedColor = req.session.selectedColor || 'lightgrey'; //|| 'transparent'
      const authorise = req.session.authorise;
      res.send(
        new SiteBuilder('History', savedColor, authorise).generateView(
          'history',
        ),
      );
    };
  }

  static css() {
    return (req: Request, res: Response) => {
      const savedColor = req.session.selectedColor || 'lightgrey'; //|| 'transparent'
      const authorise = req.session.authorise;
      res.send(
        new SiteBuilder('Css', savedColor, authorise).generateView('css'),
      );
    };
  }

  static login() {
    return (req: Request, res: Response) => {
      const savedColor = req.session.selectedColor || 'lightgrey'; //|| 'transparent'
      const authorise = req.session.authorise;
      res.send(
        new SiteBuilder('Login', savedColor, authorise).generateView('login'),
      );
    };
  }
}
