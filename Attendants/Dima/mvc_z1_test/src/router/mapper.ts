import { PageController } from "../controller/PageController";
import { DbController } from "../controller/DbController";
import { UserRepository } from "../model/UserRepository";
import { registry } from "./RouteRegistry";

const dbController = new DbController(new UserRepository());

registry.register("/", PageController.getMainPage());
registry.register("/contacts", PageController.getContactPage());
registry.register("/map", PageController.getMapPage());
registry.register("/company_history", PageController.getCompanyHistoryPage());
registry.register("/management", PageController.getManagementPage());
registry.register("/about", PageController.getAboutPage());
registry.register("/products", PageController.getProductsPage());
registry.register("/certificate", PageController.getCertificatePage());
registry.register(
  "/company_presentation",
  PageController.getCompanyPresentationPage(),
);
registry.register("/css", PageController.getCssPage());
registry.register("/dbdata", dbController.getDBDataPage());
