import { Express } from 'express';
import express from 'express';
import { PageController } from '../controller/PageController';

export class Routes {
  constructor(
    private readonly server: Express,
    private readonly dir: string,
  ) {
    this.server.use(express.static(`${this.dir}/public/css`));
    this.server.get(`/`, PageController.getMainPage());
    this.server.get(`/cred`, PageController.getCredPage());
    this.server.get(`/mapka`, PageController.getMapPage());
  }

}
