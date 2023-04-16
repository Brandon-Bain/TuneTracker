export const ExampleReference = Symbol.for("Example");

export interface IExample {
  getExampleData(): { exampleData: string };
}
