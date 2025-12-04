import express, { Express } from "express";
import { PageController } from "../controller/PageController";

export class Router {
  constructor(
    private readonly server: Express,
    private readonly dir: string
  ) {
    this.server.use(express.json()); // Middleware to parse JSON bodies
    this.server.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
    this.server.use(express.static(`${this.dir}/public/styles`));
    // console.log(this.dir);
    this.server.use(express.static(`${this.dir}/public/images`));
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
