import { Request, Response } from 'express';
import { ContactsPageView } from '../view/pages/contactsPage';
import { MapPageView } from '../view/pages/mapPage';
import { MainPageView } from '../view/pages/mainPage';
import { CompanyHistoryPageView } from '../view/pages/companyHistoryPage';
import { ManagementPageView } from '../view/pages/managementPage';
import { AboutPageView } from '../view/pages/aboutPage';
import { ProductsPageView } from '../view/pages/productsPage';
import { PhotoGalleryPageView } from '../view/pages/photoGalleryPage';
import { CompanyPresentationPageView } from '../view/pages/CompanyPresentation';
import { CssPageView } from '../view/pages/cssPage';

declare module 'express-session' {
  interface SessionData {
    color: string;
  }
}

export class PageController {
  static getMainPage() {
    return (req: Request, res: Response) => {
      res.send(new MainPageView().renderPage(res.locals));
    };
  }

  static getContactPage() {
    return (req: Request, res: Response) => {
      res.send(new ContactsPageView().renderPage(res.locals));
    };
  }

  static getMapPage() {
    return (req: Request, res: Response) => {
      res.send(new MapPageView().renderPage(res.locals));
    };
  }

  static getCompanyHistoryPage() {
    return (req: Request, res: Response) => {
      res.send(new CompanyHistoryPageView().renderPage(res.locals));
    };
  }

  static getManagementPage() {
    return (req: Request, res: Response) => {
      res.send(new ManagementPageView().renderPage(res.locals));
    };
  }

  static getAboutPage() {
    return (req: Request, res: Response) => {
      res.send(new AboutPageView().renderPage(res.locals));
    };
  }

  static getProductsPage() {
    return (req: Request, res: Response) => {
      res.send(new ProductsPageView().renderPage(res.locals));
    };
  }

  static getPhotoGalleryPage() {
    return async (req: Request, res: Response): Promise<void> => {
      const repo =
        require('../model/RepositoryRegistry').repositoryRegistry.get(
          'photo_gallery',
        ) as any;
      const selectedCategory =
        typeof req.query.category === 'string' ? req.query.category : '';
      const showUploadForm = req.query.mode === 'upload';
      const page = Number(req.query.page) || 1;
      const limit = 5;
      const offset = (page - 1) * limit;

      const normalized = [] as Array<{
        id: number;
        image_url: string;
        category: string;
      }>;
      let totalPages = 1;

      if (selectedCategory) {
        const data = await repo.getImagesByCategory({
          category: selectedCategory,
          limit,
          offset,
        });
        const count = await repo.getImagesCountByCategory({
          category: selectedCategory,
        });
        const total = Number(count?.total ?? 0);
        totalPages = Math.max(1, Math.ceil(total / limit));
        const normalizedData = Array.isArray(data) ? data : data ? [data] : [];
        normalized.push(...normalizedData);
      }

      res.send(
        new PhotoGalleryPageView().renderPage({
          ...res.locals,
          photo_gallery: normalized,
          selectedCategory,
          currentPage: page,
          totalPages,
          showUploadForm,
        }),
      );
    };
  }

  static getCompanyPresentationPage() {
    return (req: Request, res: Response) => {
      res.send(new CompanyPresentationPageView().renderPage(res.locals));
    };
  }

  static getCssPage() {
    return (req: Request, res: Response) => {
      res.send(new CssPageView().renderPage(res.locals));
    };
  }
}
