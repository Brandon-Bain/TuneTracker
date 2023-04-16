import { injectable, inject } from "inversify";
import { ExampleReference, type IExample } from "../interfaces";

@injectable()
export class ExampleData {
  private exampleAdapter: IExample;

  constructor(@inject(ExampleReference) _exampleAdapter: IExample) {
    this.exampleAdapter = _exampleAdapter;
  }

  getData() {
    return this.exampleAdapter.getExampleData();
  }
}
