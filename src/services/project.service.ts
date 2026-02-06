import { SuccessResponse } from "../dtos/response.dto";
import {
    findProjectByIDRepo,
    findProjectsRepo,
} from "../repositories/project.repository";
import { FindProjectsFilter, ProjectDTO } from "../dtos/project.dto";
import { NotFoundError } from "../errors";
import { toProjectDTO, toProjectDTOList } from "../mappers/project.mapper";

export async function getListProjectsService(
    filter?: FindProjectsFilter,
): Promise<SuccessResponse<ProjectDTO[]>> {
    const projects = await findProjectsRepo(filter);
    return {
        success: true,
        message: "Successfully retrieved list of projects",
        data: toProjectDTOList(projects),
    };
}

export async function getProjectByIDService(
    id: string,
): Promise<SuccessResponse<ProjectDTO>> {
    const project = await findProjectByIDRepo(id);
    if (!project) {
        throw new NotFoundError("Project not found");
    }
    return {
        success: true,
        message: "Successfully retrieved project by ID",
        data: toProjectDTO(project),
    };
}
