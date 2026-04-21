import { generalBody } from './generalBody';
import { head } from './head';

export const generateHTML = (
  title: string,
  innerHtml: string,
  locals: Record<string, any> = {},
): string => {
  const navColor = locals.navColor ?? '#90ee90';
  return `${head(title)} ${generalBody(innerHtml, navColor)}`;
};
