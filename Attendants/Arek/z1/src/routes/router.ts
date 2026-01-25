import { Express } from 'express';
import { PageController } from '../controllers/PageController';

export function routing(server: Express) {
  server.get('/', PageController.mainPage()); // all
  server.get('/historia_firmy', PageController.companyHistory()); // all
}
