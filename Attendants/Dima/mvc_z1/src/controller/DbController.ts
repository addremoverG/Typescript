import { Request, Response } from 'express';
import { DBPageView } from '../view/pages/getDBdata';
import { repositoryRegistry } from '../model/RepositoryRegistry';
import { ProductsPageView } from '../view/pages/productsPage';

export class DbController {
  static getUsersData(repoName: string, methodName: string) {
    return async (req: Request, res: Response): Promise<void> => {
      const repo = repositoryRegistry.get(repoName) as any;
      const method = repo[methodName];
      const data = await method.call(repo, req.params.id);
      const normalized = Array.isArray(data) ? data : data ? [data] : [];
      res.send(
        new DBPageView().renderPage({ ...res.locals, [repoName]: normalized }),
      );
    };
  }

  static getProductsData(repoName: string, methodName: string) {
    return async (req: Request, res: Response): Promise<void> => {
      const repo = repositoryRegistry.get(repoName) as any;
      const method = repo[methodName];
      const data = await method.call(repo, req.params.id);
      const normalized = Array.isArray(data) ? data : data ? [data] : [];
      res.send(
        new ProductsPageView().renderPage({
          ...res.locals,
          [repoName]: normalized,
        }),
      );
    };
  }
}
