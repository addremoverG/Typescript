import { Request, Response, NextFunction } from 'express';

export function colorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  res.locals.navColor = req.session.color ?? '#90ee90';
  next();
}
