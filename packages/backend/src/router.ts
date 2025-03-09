import { FastifyInstance } from "fastify";
import userController from "./controller/userController";
// import indexController from "./controller/indexController";
import fastifyStatic from "@fastify/static";
import path from "path";

export default async function router(fastify: FastifyInstance) {
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, "../static/"),
    prefix: "/",
  });
  fastify.register(userController, { prefix: "/api/v1/user" });
  // fastify.register(indexController, { prefix: "/" });
}
