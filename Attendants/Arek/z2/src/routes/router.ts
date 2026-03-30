import { Express } from 'express';
import { PageController } from '../controllers/PageController';

import 'express-session';

// declare module 'express-session' {
//   interface SessionData {
//     selectedColor?: string;
//     authorise?: string;
//   }
// }

// import { Session } from 'express-session';
// // Definiujemy strukturę Twoich danych w sesji
// interface MySessionData extends Session {
//   btnColor?: string;
// }
// // Rozszerzamy Request, aby używał naszej wersji sesji
// interface MyRequest extends Request {
//   session: MySessionData;
// }

export function routing(server: Express) {
  server.get('/', PageController.mainPage); // all
  server.get('/historia_firmy', PageController.companyHistory); // all
  server.get('/css', PageController.css); // all

  server.get('/login', PageController.login);
  // server.get('/logout', (req, res) => {
  //   // req.session.authorise = undefined;
  //   // req.session.destroy();
  //   // res.send(successHtml());
  //   req.session.destroy((err) => {
  //     if (err) {
  //       console.log('Błąd podczas wylogowywania:', err);
  //       return res.redirect('/'); // W razie błędu i tak wróć na główną
  //     }

  //     // 2. Opcjonalnie: wyczyść ciasteczko sesyjne w przeglądarce
  //     res.clearCookie('connect.sid'); // 'connect.sid' to domyślna nazwa ciasteczka Express

  //     // 3. Przekieruj lub wyślij swój HTML z timerem
  //     res.send(`
  //           <h1>Zostałeś wylogowany</h1>
  //           <p>Za chwilę wrócisz na stronę główną...</p>
  //           <meta http-equiv="refresh" content="2;url=/" />
  //       `);
  //   });
  // });
  server.get('/logout', PageController.handleLogout);
  // server.post('/save-color', (req, res) => {
  //   req.session.selectedColor = req.body.color;
  //   res.json({ status: 'success' });
  // });
  server.post('/save-color', PageController.handleSaveColor);

  // server.post('/submit-data', (req, res) => {
  //   const { name, email } = req.body;
  //   // console.log(`Otrzymano: Imię - ${name}, Email - ${email}`);

  //   req.session.authorise = name;
  //   // req.session.destroy((err) => {
  //   //   if (err) {
  //   //     return res.status(500).send('Błąd podczas wylogowywania');
  //   //   }
  //   //   // Po usunięciu sesji czyścimy cookie w przeglądarce
  //   //   res.clearCookie('connect.sid');
  //   //   res.redirect('/login');
  //   // });

  //   // res.send(`Dziękujemy ${name}! Twoje dane zostały odebrane.`);

  //   // req.session.selectedColor = req.body.color;
  //   // res.json({ status: 'success' });
  //   // res.redirect('/');
  //   res.send(successHtml(name));
  // });

  server.post('/submit-data', PageController.handleSubmitData);

  // // Endpoint zwracający aktualny kolor z sesji
  // server.get('/get-color', (req: MyRequest, res) => {
  //   res.json({ color: req.session.btnColor || 'gray' });
  // });

  // // Endpoint zmieniający kolor w sesji PO KLIKNIĘCIU
  // server.post('/update-color', (req: MyRequest, res) => {
  //   req.session.btnColor = req.body.newColor;
  //   // Wymuszenie zapisu sesji przed odpowiedzią
  //   req.session.save((err) => {
  //     if (err) return res.status(500).send('Błąd zapisu');
  //     res.json({ success: true });
  //   });
  // });
}
