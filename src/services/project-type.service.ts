import { SuccessResponse } from "../dtos/response.dto";
import { project_types } from "../generated/prisma/client";
import { findProjectTypesRepo } from "../repositories/project-type.repository";

export async function getListProjectTypeService(): Promise<
    SuccessResponse<project_types[]>
> {
    const project_types = await findProjectTypesRepo();

    return {
        success: true,
        message: "Successfully retrieved list of project types",
        data: project_types,
    };
}
