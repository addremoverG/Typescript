import express, { Express } from "express";
import { PageController } from "../controller/PageController";

export class Routes {
  constructor(
    private readonly server: Express,
    private readonly dir: string,
  ) {
    this.server.use(express.static(`${this.dir}/public`));
    this.server.get(`/`, PageController.getMainPage());
    this.server.get(`/data`, PageController.getDataPage());
  }
}
