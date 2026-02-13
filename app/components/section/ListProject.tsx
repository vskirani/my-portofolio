import { FindProjectsFilter, ProjectDTO } from "@/src/dtos/project.dto";
import { getListProjectsService } from "@/src/services/project.service";
import Link from "next/link";


export default async function ListProject({ category = 'All' }: { category: string }) {

    let filter: FindProjectsFilter;
    let projects: ProjectDTO[];
    if (category === 'All') {
        const res = await getListProjectsService(); // minta data dari service
        projects = res.data; // ambil data dari service
    } else {
        filter = { typeCode: category };
        const res = await getListProjectsService(filter); // minta data dari service
        projects = res.data; // ambil data dari service
    }
    return (
        <section className="pb-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Link
                            href={`/project/${project.id}`}
                            key={project.id}
                            className="group"
                        >
                            <article className="h-[420px] flex flex-col bg-white border border-pink-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-pink-200 transition-all duration-300 hover:-translate-y-1">
                                {/* Project Image */}
                                <div className="relative h-52 overflow-hidden bg-pink-50">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Category Badge */}
                                    <span className="absolute bottom-4 left-4 px-3 py-1 text-xs font-medium text-[#ec4899] bg-white/90 backdrop-blur-sm rounded-full border border-pink-100">
                                        {project.projectType.name}
                                    </span>

                                    {/* Year */}
                                    <span className="absolute top-4 left-4 text-xs text-white font-mono bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                                        {project.year}
                                    </span>

                                    {/* Arrow */}
                                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-pink-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 shadow-md">
                                        <svg
                                            className="w-4 h-4 text-[#ec4899]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 17L17 7M17 7H7M17 7v10"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#ec4899] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-5 line-clamp-2 flex-1 text-justify">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.techStacks
                                            .slice(0, 3)
                                            .map((tech_stack) => (
                                                <span
                                                    key={tech_stack.id}
                                                    className="px-3 py-1.5 text-xs text-gray-500 bg-pink-50 border border-pink-100 rounded-full"
                                                >
                                                    {tech_stack.name}
                                                </span>
                                            ))}
                                        {project.techStacks.length > 3 && (
                                            <span className="px-3 py-1.5 text-xs text-[#ec4899] bg-pink-100 border border-pink-200 rounded-full font-medium">
                                                +{project.techStacks.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}