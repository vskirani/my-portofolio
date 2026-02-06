export type FindProjectsFilter = {
    typeCode?: string;
    isStarred?: boolean;
    limit?: number;
};

export type TechStackDTO = {
    id: string;
    name: string;
};
export type ProjectTypeDTO = {
    code: string;
    name: string;
};
export type ProjectDTO = {
    id: string;
    title: string;
    description: string;
    typeCode: string;
    imageUrl: string;
    githubUrl: string | null;
    figmaUrl: string | null;
    projectUrl: string | null;
    otherUrl: string | null;
    problem: string | null;
    solution: string | null;
    result: string | null;
    isStarred: boolean;
    createdAt: Date;
    techStacks: TechStackDTO[];
    projectType: ProjectTypeDTO;
};
