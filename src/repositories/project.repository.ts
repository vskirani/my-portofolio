import { FindProjectsFilter } from "../dtos/project.dto";
import { Prisma, projects } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";

export async function findProjectsRepo(
    filter?: FindProjectsFilter,
): Promise<projects[]> {
    const where: Prisma.projectsWhereInput = {};
    if (filter?.typeCode) {
        where.type_code = filter.typeCode;
    }
    if (filter?.isStarred !== undefined) {
        where.is_starred = filter.isStarred;
    }
    return await prisma.projects.findMany({
        where,
        take: filter?.limit,
        orderBy: { created_at: "desc" },
    });
}

export async function findProjectByIDRepo(
    id: string,
): Promise<projects | null> {
    return await prisma.projects.findUnique({ where: { id } });
}
