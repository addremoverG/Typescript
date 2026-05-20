import { Request, Response } from 'express';

export class CssController {
  static setColor() {
    return (req: Request, res: Response): void => {
      const { color } = req.body;
      console.log(`Setting color to ${color}`);
      req.session.color = color;
      const referer = req.get('referer') || '/';
      res.redirect(referer);
    };
  }
}
