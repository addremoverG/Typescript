import { View } from "./abstractView";

export class MainPage extends View {
  title: string;
  bodyElement: string;

  constructor() {
    super();
    this.title = "Main Page";
    this.bodyElement = "<h1>Hello</h1>"
  }
}
