export * from './View.interface';
import 'express-session';
declare module 'express-session' {
  interface SessionData {
    bgColor?: string;
  }
}