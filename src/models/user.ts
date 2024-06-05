import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma.user;

// Prisma Client es un generador de consultas con seguridad de tipos de generación 
// automática que puede utilizar para leer y escribir datos mediante programación 
// en una base de datos desde una aplicación Node. js o TypeScript