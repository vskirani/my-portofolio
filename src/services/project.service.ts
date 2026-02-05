import { SuccessResponse } from "../dtos/response.dto";
import { projects } from "../generated/prisma/client";
import {
    findProjectByIDRepo,
    findProjectsRepo,
} from "../repositories/project.repository";
import { FindProjectsFilter } from "../dtos/project.dto";
import { NotFoundError } from "../errors";

export async function getListProjectsService(
    filter?: FindProjectsFilter,
): Promise<SuccessResponse<projects[]>> {
    const projects = await findProjectsRepo(filter);

    return {
        success: true,
        message: "Successfully retrieved list of projects",
        data: projects,
    };
}

export async function getProjectByIDService(
    id: string,
): Promise<SuccessResponse<projects>> {
    const project = await findProjectByIDRepo(id);

    if (!project) {
        throw new NotFoundError("Project not found");
    }

    return {
        success: true,
        message: "Successfully retrieved project by ID",
        data: project,
    };
}
