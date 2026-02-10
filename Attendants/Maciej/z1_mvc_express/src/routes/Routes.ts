import { Express } from 'express';
import express from 'express';
import { PageController } from '../controller/PageController';

export class Routes {
  constructor(
    private readonly server: Express,
    private readonly dir: string,
  ) {
    this.server.use(express.static(`${this.dir}/public/css`));
    this.server.use('/images', express.static(`${this.dir}/public/images`));
    this.server.get('/z1', PageController.getHomePage());
    this.server.get('/z1/oferta', PageController.getOfferPage());
    this.server.get('/z1/historia', PageController.getHistoryPage());
    this.server.get('/z1/zarzad', PageController.getBoardPage());
    this.server.get('/z1/prezentacja', PageController.getPresentationPage());
    this.server.get('/z1/certyfikat', PageController.getCertificatePage());
    this.server.get('/z1/pisza-o-nas', PageController.getMediaPage());
    this.server.get('/z1/mapa', PageController.getMapPage());
    this.server.get('/z1/kontakt', PageController.getContactPage());
    this.server.get('/', (req, res) => res.redirect('/z1'));
  }
}