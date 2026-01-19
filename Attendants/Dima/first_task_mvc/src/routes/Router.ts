import express, { Express } from "express";
import { PageController } from "../controller/PageController";

export class Router {
  constructor(
    private readonly server: Express,
    private readonly dir: string
  ) {
    this.server.use(
      express.json(),
      express.urlencoded({ extended: true }),
      express.static(`${this.dir}/public/styles`),
      express.static(`${this.dir}/public/images`)
    );
    this.server.get("/", PageController.getMainPage());
    this.server.get("/contacts", PageController.getContactPage());
    this.server.get("/map", PageController.getMapPage());
    this.server.get("/company_history", PageController.getCompanyHistoryPage());
    this.server.get("/management", PageController.getManagementPage());
    this.server.get("/about", PageController.getAboutPage());
    this.server.get("/products", PageController.getProductsPage());
    this.server.get("/certificate", PageController.getCertificatePage());
    this.server.get(
      "/company_presentation",
      PageController.getCompanyPresentationPage()
    );
  }
}
