export interface IView {
  title: string;
  renderPage(locals?: Record<string, any>): string;
}
