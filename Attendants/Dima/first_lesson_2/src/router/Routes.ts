import express, { Express } from 'express';
import { PageController } from '../controller/PageController';

export class Routes {
  constructor(
    private readonly server: Express,
    private readonly dir: string,
  ) {
    this.server.use(express.json()); // Middleware to parse JSON bodies
    this.server.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
    this.server.use(express.static(`${this.dir}/public/css`));
    this.server.post('/', PageController.getMainPage());
    this.server.post('/cred', PageController.showCredentials());
  }
}
