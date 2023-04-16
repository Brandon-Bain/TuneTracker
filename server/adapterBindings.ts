import { Container } from "inversify";
import { ExampleAdapter } from "./adapters";
import { ExampleReference, type IExample } from "./interfaces";

const adapters = new Container();

adapters.bind<IExample>(ExampleReference).to(ExampleAdapter);

export { adapters };
