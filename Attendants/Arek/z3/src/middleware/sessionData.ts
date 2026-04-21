import { Request, Response, NextFunction } from 'express';
// import '../types/session.d.ts';
declare module 'express-session' {
  interface SessionData {
    selectedColor?: string;
    authorise?: string;
  }
}
/*
res.locals. Jest to specjalny schowek Expressa, który żyje tylko podczas jednego żądania i jest dostępny w każdym kolejnym kroku (middleware lub kontrolerze).
*/

export const injectSessionData = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Przypisujemy dane do res.locals
  res.locals.savedColor = req.session.selectedColor ?? 'lightgrey';
  res.locals.authorise = req.session.authorise || null;

  next(); // Przechodzimy do następnego kroku (np. do kontrolera)
};
