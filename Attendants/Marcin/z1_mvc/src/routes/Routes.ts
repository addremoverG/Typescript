import { Express } from 'express';
import express from 'express';
import { PageController } from '../controller/PageController';
// import { mainPage } from '../view/Views';

export class Routes {
  constructor(
    private readonly server: Express,
    private readonly dir: string,
  ) {
    this.server.use(express.static(`${this.dir}/public/css`));
    this.server.get(`/`, PageController.getHomePage());
    this.server.get(`/home`, PageController.getHomePage());
    this.server.get(`/about`, PageController.getAboutPage());
    this.server.get(`/map`, PageController.getMapPage());
    this.server.get(`/portfolio`, PageController.getPortfolioPage());
    this.server.get(`/contact`, PageController.getContactPage());
  }
}