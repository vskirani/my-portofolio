import { certificates } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";

export async function findCertificatesRepo(): Promise<certificates[]> {
    return await prisma.certificates.findMany();
}
