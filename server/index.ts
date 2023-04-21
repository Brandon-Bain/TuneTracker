import Fastify from "fastify";
import path from "path";
import { logger } from "@utils/logger";
import routes from "./routes";

(async () => {
  const fastify = Fastify({ logger: true });

  const SERVER_PORT = Number(process.env.SERVER_PORT) || 3000;

  fastify.listen({ port: SERVER_PORT, host: "0.0.0.0" });

  // Setup route for static webpage
  fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "../client/build/"),
    prefix: "/", // optional: default '/'
    constraints: {}, // optional: default {}
  });

  // Setup Health Check
  fastify.get("/health", async (_req, res) => {
    res.code(204).send();
  });

  fastify.register(routes);

  await fastify.ready();
  logger.info(`Server Listening on http://localhost:${SERVER_PORT}`);

  if (process.env.ENV !== "prod") {
    console.log(fastify.printRoutes());
  }
})();
