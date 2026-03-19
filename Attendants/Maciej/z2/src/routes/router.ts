import { Express } from 'express';
import { PageController } from '../controllers/PageController';

export class AppRouter {
  public static init(server: Express): void {
    server.get('/', (req, res) => res.redirect('/z1'));
    server.get('/z1', PageController.mainPage());
    server.get('/z1/oferta', PageController.offerPage());
    server.get('/z1/historia', PageController.companyHistory());
    server.get('/z1/zarzad', PageController.boardPage());
    server.get('/z1/prezentacja', PageController.presentationPage());
    server.get('/z1/certyfikat', PageController.certificatePage());
    server.get('/z1/pisza-o-nas', PageController.mediaPage());
    server.get('/z1/mapa', PageController.mapPage());
    server.get('/z1/kontakt', PageController.contactPage());
    server.get('/z1/wyglad', PageController.appearancePage());
    server.post('/z1/zmien-tlo', PageController.changeBgColor()); 
  }
}