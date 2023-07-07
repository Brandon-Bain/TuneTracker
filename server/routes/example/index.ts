import { adapters } from "../../adapterBindings";
import ExampleSchema from "./schema";
import { ExampleData } from "../../useCases/example";
import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async (fastify: FastifyInstance) => {
  fastify.get(
    "/exampleData",
    { schema: ExampleSchema },
    (_req: FastifyRequest, res: FastifyReply) => {
      const _ExampleUsecase = adapters.resolve(ExampleData);

      res.code(200).send(_ExampleUsecase.getData());
    }
  );
};
