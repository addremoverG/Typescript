import { Request, Response, NextFunction } from 'express';

export const injectSessionData = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.locals.bgColor = req.session.bgColor ?? '#f4f4f4';
  res.locals.user = req.session.user ?? null;
  next();
};
