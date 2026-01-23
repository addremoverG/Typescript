import { ServerResponse } from 'node:http';
import { Models } from '../model/Models';

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
}
