import { Request, Response, NextFunction } from 'express';

export const defaultColor = '#90ee90';

export function colorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  res.locals.navColor = req.session.color ?? defaultColor;
  next();
}
