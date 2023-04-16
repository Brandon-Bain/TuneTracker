import ExampleRoutes from "./example";

import type { FastifyInstance } from "fastify";

export default async (fastify: FastifyInstance) => {
  fastify.register(ExampleRoutes, { prefix: "/example" });
};
