import http from 'node:http';
import { PageController } from './controller/PageController';

(async (): Promise<void> => {
  const port = Number(process.env.PORT) || 3000;
  const server = http.createServer((request, response) => {
    const url = new URL(request.url ?? '', `http://${request.headers.host}`)
    const mapper = {
      '/api/data': () => { PageController.getApiData(response) },
      '/': () => { PageController.mainPage(response) },
      '/styles.css': () => { PageController.getCss(response) },
      '/images/logo.png': () => { PageController.getImage(response) }
    }

    if (!Object.keys(mapper).includes(url.pathname)) {
      (() => {
        response.writeHead(404);
        response.end("Not found")
      })();
    } else {
      mapper[url.pathname as keyof typeof mapper]()
    }
  })
  server.listen(port, () => console.log(`Running on port ${port}`))
})().catch((err) => {
  console.log(err instanceof Error ? err.message : err)
})