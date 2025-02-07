import { FastifyPluginCallback } from "fastify";
import { userService } from "./user.service.js";

export const userController: FastifyPluginCallback = async (fastify) => {
  fastify.get('/users', async (request, reply) => {
    userService.getAll(request, reply);
  })
}