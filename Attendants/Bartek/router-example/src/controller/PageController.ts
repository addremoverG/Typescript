import { ServerResponse } from 'node:http';
import { Models } from '../model/Models';
import { MainView } from '../view/MainView';
import { readFileSync } from 'node:fs';
import path from 'path';

export class PageController {
  // static getMainPage() {
  //   return (req: Request, res: Response) => {
  //     res.send(Views.getMainPage());
  //   };
  // }

  // static getDataPage() {
  //   return async (req: Request, res: Response) => {
  //     // const data = dummyData;
  //     const data = await PG.getInstance().queryDB();
  //     res.send(Views.getDataPage(data));
  //   };
  // }
  static getApiData(response: ServerResponse): void {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(
      JSON.stringify({
        message: `Success. Model value: ${Models.returnValue()}`
      })
    );
    return;
  }

  static mainPage(response: ServerResponse): void {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
    response.end(MainView.getMainPage())
    return;
  }
  static getCss(res: ServerResponse): void {
    try {
      const data: Buffer = readFileSync('../../public/styles.css');

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
    return;
  }

  static getImage(res: ServerResponse): void {
    try {
      // Read as raw binary Buffer
      const img = readFileSync('../../public/images/logo.png');

      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      // Buffers can be sent directly via res.end()
      res.end(img);
    } catch (err) {
      throw new Error(`[ERROR] ${err instanceof Error ? err.message : err}`)
      res.writeHead(404);
      res.end('Image Not Found');
    }
    return;
  }
}
