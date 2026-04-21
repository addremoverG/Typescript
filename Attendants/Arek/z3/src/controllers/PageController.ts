import { Request, Response } from 'express';
import { SiteBuilder } from '../views/pages/SiteBuilder';
import { successHtml } from '../views/layouts/successTemplate';
import { PG } from '../models/Pg';

// declare module 'express-session' {
//   interface SessionData {
//     selectedColor?: string;
//     authorise?: string;
//   }
// }
export class PageController {
  static mainPage(req: Request, res: Response) {
    // const savedColor = req.session.selectedColor || 'lightgrey';
    // const authorise = req.session.authorise;
    const { savedColor, authorise } = res.locals;
    res.send(
      new SiteBuilder('Main Page', savedColor, authorise).generateView(),
    );
  }

  static companyHistory(req: Request, res: Response) {
    // const savedColor = req.session.selectedColor || 'lightgrey'; //|| 'transparent'
    // const authorise = req.session.authorise;
    const { savedColor, authorise } = res.locals;
    res.send(
      new SiteBuilder('History', savedColor, authorise).generateView('history'),
    );
  }

  static css(req: Request, res: Response) {
    // const savedColor = req.session.selectedColor || 'lightgrey'; //|| 'transparent'
    // const authorise = req.session.authorise;
    const { savedColor, authorise } = res.locals;
    res.send(new SiteBuilder('Css', savedColor, authorise).generateView('css'));
  }

  static login(req: Request, res: Response) {
    // const savedColor = req.session.selectedColor || 'lightgrey'; //|| 'transparent'
    // const authorise = req.session.authorise;
    const { savedColor, authorise } = res.locals;
    res.send(
      new SiteBuilder('Login', savedColor, authorise).generateView('login'),
    );
  }

  static handleSaveColor(req: Request, res: Response) {
    req.session.selectedColor = req.body.color;
    res.json({ status: 'success' });
  }

  static handleLogout(req: Request, res: Response) {
    req.session.destroy((err) => {
      // if (err) {
      //   console.log('Błąd podczas wylogowywania:', err);
      //   return res.redirect('/'); // W razie błędu i tak wróć na główną
      // }
      if (err) return res.redirect('/');
      // 2. Opcjonalnie: wyczyść ciasteczko sesyjne w przeglądarce
      res.clearCookie('connect.sid'); // 'connect.sid' to domyślna nazwa ciasteczka Express
      // 3. Przekieruj lub wyślij swój HTML z timerem
      res.send(`
            <h1>Zostałeś wylogowany</h1>
            <p>Za chwilę wrócisz na stronę główną...</p>
            <meta http-equiv="refresh" content="2;url=/" />
        `);
    });
  }

  static handleSubmitData(req: Request, res: Response) {
    const { name, email } = req.body;
    req.session.authorise = name;
    res.send(successHtml(name));
  }

  static async kontakt(req: Request, res: Response) {
    // const data = dummyData;
    const { savedColor, authorise } = res.locals;
    const data = await PG.getInstance().queryDB();
    res.send(
      new SiteBuilder('Kontakt', savedColor, authorise).generateView(
        'kontakt',
        data,
      ),
    );
  }
}
