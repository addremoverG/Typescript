import { postRegistry } from './postRouteRegistry';
import { CssController } from '../controller/CssController';
import '../model/repositoriesMapper';

postRegistry.register('/set-color', CssController.setColor());
