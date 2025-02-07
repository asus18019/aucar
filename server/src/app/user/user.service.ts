import { FastifyRequest, FastifyReply } from 'fastify';

const mockUsers = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Emma",
    lastName: "Mitchell",
    email: "emma.mitchell@example.com",
    city: "New York"
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    name: "Michael",
    lastName: "Thompson",
    email: "michael.t@example.com",
    city: "Los Angeles"
  },
  {
    id: "7ba7b810-9dad-11d1-80b4-00c04fd430c9",
    name: "Sofia",
    lastName: "Rodriguez",
    email: "sofia.rodriguez@example.com",
    city: "Chicago"
  },
  {
    id: "8ba7b810-9dad-11d1-80b4-00c04fd430c7",
    name: "James",
    lastName: "Wilson",
    email: "james.wilson@example.com",
    city: "Houston"
  },
  {
    id: "9ba7b810-9dad-11d1-80b4-00c04fd430c6",
    name: "Olivia",
    lastName: "Anderson",
    email: "olivia.a@example.com",
    city: "Seattle"
  },
  {
    id: "aa7b810-9dad-11d1-80b4-00c04fd430c5",
    name: "William",
    lastName: "Brown",
    email: "w.brown@example.com",
    city: "Boston"
  },
  {
    id: "ba7b810-9dad-11d1-80b4-00c04fd430c4",
    name: "Isabella",
    lastName: "Garcia",
    email: "i.garcia@example.com",
    city: "Miami"
  },
  {
    id: "ca7b810-9dad-11d1-80b4-00c04fd430c3",
    name: "Lucas",
    lastName: "Martinez",
    email: "lucas.m@example.com",
    city: "San Francisco"
  },
  {
    id: "da7b810-9dad-11d1-80b4-00c04fd430c2",
    name: "Ava",
    lastName: "Taylor",
    email: "ava.taylor@example.com",
    city: "Denver"
  },
  {
    id: "ea7b810-9dad-11d1-80b4-00c04fd430c1",
    name: "Noah",
    lastName: "Johnson",
    email: "noah.j@example.com",
    city: "Phoenix"
  }
];

export const userService = {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      return reply.code(200).send(mockUsers);
    } catch (error) {
      return reply.code(500).send({ error: 'Internal Server Error' });
    }
  }
}