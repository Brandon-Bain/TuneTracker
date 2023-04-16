import "reflect-metadata";
import { injectable } from "inversify";
import type { IExample } from "../interfaces";

@injectable()
export class ExampleAdapter implements IExample {
  public getExampleData() {
    return { exampleData: "Hello World" };
  }
}
