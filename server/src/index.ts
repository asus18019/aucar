import Fastify from 'fastify';
import fastifyRequestLogger from '@mgcrea/fastify-request-logger';
import { userController } from './app/user/user.controller';

const fastify = Fastify({
  logger: {
    level: "info",
    transport: {
      target: "@mgcrea/pino-pretty-compact",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
});

fastify.register(fastifyRequestLogger);

fastify.register(userController, { prefix: '/api' });
fastify.get('/', async (_request, reply) => {
  return reply.status(200).send({ message: "Base host for AUCAR server" });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log("Server is running on port 3000");
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()