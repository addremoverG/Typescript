import { Request, Response } from 'express';
import { defaultColor } from '../middleware/colorMiddleware';

export class CssController {
  static setColor() {
    return (req: Request, res: Response): void => {
      const { color } = req.body;
      req.session.color = color;
      const referer = req.get('referer') || '/';
      res.redirect(referer);
    };
  }

  static resetColor() {
    return (req: Request, res: Response): void => {
      req.session.color = defaultColor;
      const referer = req.get('referer') || '/';
      res.redirect(referer);
    };
  }
}
