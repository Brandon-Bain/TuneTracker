import type { FastifySchema } from "fastify";

const schema: FastifySchema = {
  response: {
    200: {
      type: "object",
      properties: {
        exampleData: { type: "string" },
        additionalProperties: false,
      },
    },
  },
};

export default schema;
