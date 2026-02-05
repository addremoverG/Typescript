import { Express } from 'express';
import { PageController } from '../controller/PageController';

export function routing(server: Express) {
  server.get('/', PageController.mainPage()); // all
}
