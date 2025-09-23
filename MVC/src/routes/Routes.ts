import { Express } from 'express';
import { PageController } from '../controller/PageController';
// import { mainPage } from '../view/Views';

export class Routes {
  constructor(private readonly server: Express) {
    this.defaultPage();
    this.credPage();
    this.dataPage();
  }

  defaultPage(): void {
    // this.server.get('/', (req, res) => {
    //   res.send(mainPage);
    // });
    this.server.get(`/`, PageController.getMainPage());
  }

  credPage(): void {
    this.server.get(`/cred`, PageController.getCredPage());
  }

  dataPage(): void {
    this.server.get(`/data`, PageController.getDataPage());
  }
}
