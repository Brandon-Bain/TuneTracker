import Fastify from "fastify";
import { logger } from "@utils/logger";

(async () => {
  const fastify = Fastify();

  const SERVER_PORT = Number(process.env.SERVER_PORT) || 3000;

  fastify.listen({ port: SERVER_PORT, host: "0.0.0.0" });

  // Setup Health Check
  fastify.get("/health", async (_req, res) => {
    res.code(204).send();
  });

  await fastify.ready();
  logger.info(`Server Listening on http://localhost:${SERVER_PORT}`);

  if (process.env.ENV !== "prod") {
    console.log(fastify.printRoutes());
  }
})();
