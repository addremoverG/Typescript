import http from 'node:http';
import { PageController } from './controller/PageController';
(async (): Promise<void> => {
  const port = Number(process.env.PORT) || 3000;

  const server = http.createServer((req, res) => {
    const url = new URL(req.url ?? '', `http://${req.headers.host}`);

    // Manual Router Setup V2
    const mapper = {
      '/api/data': () => {
        PageController.getApiData(res);
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify({ message: 'Manual route success' }));
      },
      '/': () => {
        PageController.mainPage(res);
      },
      '/styles.css': () => {
        PageController.getCss(res);
      },
      '/images/download.png': () => {
        PageController.getImage(res);
      },
    };

    if (!Object.keys(mapper).includes(url.pathname)) {
      (() => {
        res.writeHead(404);
        res.end('Not Found');
      })();
    } else {
      mapper[url.pathname as keyof typeof mapper]();
    }
  });

  server.listen(port, () => console.log(`Server running on port ${port}`));
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err);
  // process.exit(1);
});

// console.log(req.url); // /api/data?test=1&test2=2
// console.log(req.method); // GET
// console.log(req.headers.host); // localhost:3000
// console.log(url.pathname); // /api/data
// console.log(url.search); // ?test=1&test2=2

// console.log([...url.searchParams]); // [ [ 'test', '1' ], [ 'test2', '2' ] ] - searchParams is read only
// const searchParams = [...url.searchParams].reduce(
//   (prev, curr) => {
//     const [key, value] = curr;
//     prev[key] = value;
//     return prev;
//   },
//   {} as { [key: string]: string },
// ); // {key:value, ...}

// Manual Router Setup
// if (url.pathname === '/api/data' && req.method === 'GET') {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({ message: 'Manual route success' }));
// } else {
//   res.writeHead(404);
//   res.end('Not Found');
// }
