import { project_types } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";

export async function findProjectTypesRepo(): Promise<project_types[]> {
    return await prisma.project_types.findMany();
}
