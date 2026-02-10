import { Express } from 'express';
import { PageController } from '../controller/PageController';

export function routing(server: Express) {
  server.get('/', PageController.mainPage());
  server.get('/styles', PageController.stylesPage());
  server.get('/bg-settings', (req, res) => {
    res.json({ color: (req.session as any).userColor || '#ffffff' });
  });
  server.post('/save-color', (req, res) => {
    const { color } = req.body;
    (req.session as any).userColor = color;
    res.send({ msg: 'Color saved' });
  });
}
