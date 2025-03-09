import app from "./app";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;

app.listen({ host: "0.0.0.0", port: FASTIFY_PORT });

console.log(
  `🚀  Fastify server running on port http://localhost:${FASTIFY_PORT}`,
);
console.log(`Route index: /`);
console.log("Metadata: /client-metadata.json");
console.log(`Route user: /api/v1/user`);
