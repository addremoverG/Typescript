import type { ServerResponse } from 'node:http';
import { Views } from '../view/Views';
import { readFileSync } from 'node:fs';
import { Models } from '../model/Models';

export class PageController {

  static getHomePage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getHomePage());
  }

  static getOfferPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getOfferPage());
  }

  static getHistoryPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getHistoryPage());
  }

  static getBoardPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getBoardPage());
  }

  static getPresentationPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getPresentationPage());
  }

  static getCertificatePage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getCertificatePage());
  }

  static getMediaPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getMediaPage());
  }

  static getMapPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getMapPage());
  }

  static getContactPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(Views.getContactPage());
  }

  static getCss(res: ServerResponse): void {
    try {
      const data: Buffer = readFileSync('./src/public/css/styles.css');

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    } catch (err) {
      const error = err as NodeJS.ErrnoException;
      
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('CSS File Not Found');
      } else {
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    }
  }

  static getImageMain(res: ServerResponse): void {
    try {
      const img = readFileSync('./src/public/images/main.png');

      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(img);
    } catch (err) {
      throw new Error(`[ERROR] ${err instanceof Error ? err.message : err}`);
      res.writeHead(404);
      res.end('Image Not Found');
    }
  }

  static getImagePrezes(res: ServerResponse): void {
    try {
      const img = readFileSync('./src/public/images/prezes.png');

      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(img);
    } catch (err) {
      throw new Error(`[ERROR] ${err instanceof Error ? err.message : err}`);
      res.writeHead(404);
      res.end('Image Not Found');
    }
  }

  static getImageWiceprezes(res: ServerResponse): void {
    try {
      const img = readFileSync('./src/public/images/wiceprezes.png');

      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(img);
    } catch (err) {
      throw new Error(`[ERROR] ${err instanceof Error ? err.message : err}`);
      res.writeHead(404);
      res.end('Image Not Found');
    }
  }
}