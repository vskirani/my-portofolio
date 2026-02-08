import { FindProjectsFilter } from "../dtos/project.dto";
import { Prisma } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";

export async function findProjectsRepo(filter?: FindProjectsFilter) {
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
        include: {
            tech_stacks: true,
            project_types: true,
        },
    });
}
export async function findProjectByIDRepo(id: string) {
    return await prisma.projects.findUnique({
        where: { id },
        include: {
            tech_stacks: true,
            project_types: true,
            design_process: true,
            project_responsibilities: true,
        },
    });
}
