import { postRegistry } from './postRouteRegistry';
import { CssController } from '../controller/CssController';

postRegistry.register('/set-color', CssController.setColor());
