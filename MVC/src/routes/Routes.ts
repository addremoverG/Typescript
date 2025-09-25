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
    // this.defaultPage();
    this.server.get(`/`, PageController.getMainPage());
    // this.credPage();
    this.server.get(`/cred`, PageController.getCredPage());
    // this.dataPage();
    this.server.get(`/data`, PageController.getDataPage());
  }

  // defaultPage(): void {
  //   // this.server.get('/', (req, res) => {
  //   //   res.send(mainPage);
  //   // });
  //   this.server.get(`/`, PageController.getMainPage());
  // }

  // credPage(): void {
  //   // this.server.get(`/cred`, PageController.getCredPage());
  // }

  // dataPage(): void {
  //   // this.server.get(`/data`, PageController.getDataPage());
  // }
}
