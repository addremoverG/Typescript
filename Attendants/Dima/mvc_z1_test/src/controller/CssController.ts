import { Request, Response } from "express";

export class CssController {
  static setColor() {
    return (req: Request, res: Response): void => {
      const { color } = req.body;
      req.session.color = color;
      const referer = req.get("referer") || "/";
      res.redirect(referer);
    };
  }
}
