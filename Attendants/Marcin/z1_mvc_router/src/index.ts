import http from 'node:http';
import { PageController } from './controller/PageController';
(async (): Promise<void> => {
  const port = Number(process.env.PORT) || 3000;

  const server = http.createServer((req, res) => {
    const url = new URL(req.url ?? '', `http://${req.headers.host}`);
    const mapper = {
      // '/api/data': () => {
      //   PageController.getApiData(res);
      // },
      // '/': () => {
      //   PageController.mainPage(res);
      // },
      '/styles.css': () => {
        PageController.getCss(res);
      },
      // '/images/download.png': () => {
      //   PageController.getImage(res);
      // },
      '/': () => {
        PageController.getHomePage(res);
      },
      '/home': () => {
        PageController.getHomePage(res);
      },
      '/about': () => {
        PageController.getAboutPage(res);
      },
      '/map': () => {
        PageController.getMapPage(res);
      },
      '/portfolio': () => {
        PageController.getPortfolioPage(res);
      },
      '/contact': () => {
        PageController.getContactPage(res);
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
});
