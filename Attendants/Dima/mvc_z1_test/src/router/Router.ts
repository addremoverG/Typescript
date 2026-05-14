import express, { Express } from "express";
import session from "express-session";
import { registry } from "./RouteRegistry";
import "./mapper";
import { colorMiddleware } from "../middleware/colorMiddleware";
import { CssController } from "../controller/CssController";

declare module "express-session" {
  interface SessionData {
    color: string;
  }
}

export class Router {
  constructor(
    private server: Express,
    private dir: string,
  ) {
    this.server.use(
      express.json(),
      express.urlencoded({ extended: true }),
      express.static(`${this.dir}/public/styles`),
      express.static(`${this.dir}/public/images`),
      express.static(`${this.dir}/public/js`),
      session({
        secret: process.env.SESSION_SECRET || "secret",
        resave: false,
        saveUninitialized: true,
      }),
    );

    this.server.use(colorMiddleware);

    this.server.post("/set-color", CssController.setColor());

    registry.getPaths().forEach((route) => {
      this.server.get(route, registry.getHandler(route));
    });
  }
}
