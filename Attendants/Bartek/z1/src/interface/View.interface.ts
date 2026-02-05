export interface View {
  generateView(): string;
  generateView(body: string): string;
}
