import { generalBody } from './generalBody';
import { head } from './head';

export const generateHTML = (title: string, innerHtml: string) => {
  return `${head(title)} ${generalBody(innerHtml)}`;
};
