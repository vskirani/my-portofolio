import { ProjectDTO } from "../dtos/project.dto";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toProjectDTO(project: any): ProjectDTO {
    return {
        id: project.id,
        title: project.title,
        description: project.description,
        typeCode: project.type_code,
        imageUrl: project.image_url,
        githubUrl: project.github_url,
        figmaUrl: project.figma_url,
        projectUrl: project.project_url,
        otherUrl: project.other_url,
        problem: project.problem,
        solution: project.solution,
        result: project.result,
        isStarred: project.is_starred,
        createdAt: project.created_at,
        techStacks: project.tech_stacks.map(
            (ts: { id: string; name: string }) => ({
                id: ts.id,
                name: ts.name,
            }),
        ),
        projectType: {
            code: project.project_types.code,
            name: project.project_types.name,
        },
    };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toProjectDTOList(projects: any[]): ProjectDTO[] {
    return projects.map(toProjectDTO);
}
