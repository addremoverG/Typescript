import type { ServerResponse } from 'node:http';
import { MainView } from '../view/MainView';
import { readFileSync } from 'node:fs';
import { Models } from '../model/Models';

export class PageController {
  static getHomePage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(MainView.getHomePage());
  }

  static getAboutPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(MainView.getAboutPage());
  }

  static getMapPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(MainView.getMapPage());
  }

  static getPortfolioPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(MainView.getPortfolioPage());
  }

  static getContactPage(res: ServerResponse): void {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(MainView.getContactPage());
  }

  static getCss(res: ServerResponse): void {
    try {
      // Return type is Buffer
      const data: Buffer = readFileSync('./src/css/styles.css');

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    } catch (err) {
      // Cast the error to access Node.js specific properties like .code
      const error = err as NodeJS.ErrnoException;

      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('CSS File Not Found');
      } else {
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    }
    return;
  }

  // static getImage(res: ServerResponse): void {
  //   try {
  //     // Read as raw binary Buffer
  //     const img = readFileSync('./src/images/download.png');

  //     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  //     // Buffers can be sent directly via res.end()
  //     res.end(img);
  //   } catch (err) {
  //     throw new Error(`[ERROR] ${err instanceof Error ? err.message : err}`);
  //     res.writeHead(404);
  //     res.end('Image Not Found');
  //   }
  //   return;
  // }
}
