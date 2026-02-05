import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/src/generated/prisma/client";

const prismaClientSingleton = () => {
    // Buat PostgreSQL connection pool
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    // Buat adapter
    const adapter = new PrismaPg(pool);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (PrismaClient as any)({ adapter });
};

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
    globalThis.prismaGlobal = prisma;
}

export { prisma };
