import http from 'node:http';
import { PageController } from './controller/PageController';

(async (): Promise<void> => {
  const port = Number(process.env.PORT) || 3000;

  const server = http.createServer((req, res) => {
    const url = new URL(req.url ?? '', `http://${req.headers.host}`);
    const mapper = {
      '/': () => {
        res.writeHead(302, { 'Location': '/z1' });
        res.end();
      },
      '/z1': () => {
        PageController.getHomePage(res);
      },
      '/z1/oferta': () => {
        PageController.getOfferPage(res);
      },
      '/z1/historia': () => {
        PageController.getHistoryPage(res);
      },
      '/z1/zarzad': () => {
        PageController.getBoardPage(res);
      },
      '/z1/prezentacja': () => {
        PageController.getPresentationPage(res);
      },
      '/z1/certyfikat': () => {
        PageController.getCertificatePage(res);
      },
      '/z1/pisza-o-nas': () => {
        PageController.getMediaPage(res);
      },
      '/z1/mapa': () => {
        PageController.getMapPage(res);
      },
      '/z1/kontakt': () => {
        PageController.getContactPage(res);
      },
      '/styles.css': () => {
        PageController.getCss(res);
      },
      '/images/main.png': () => {
        PageController.getImageMain(res);
      },
      '/images/prezes.png': () => {
        PageController.getImagePrezes(res);
      },
      '/images/wiceprezes.png': () => {
        PageController.getImageWiceprezes(res);
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