import Link from "next/link";
import { getListProjectsService } from "@/src/services/project.service";

export default async function Projects() {
    const res = await getListProjectsService({
        isStarred: true,
        limit: 3,
    });
    const projects = res.data;




    return (
        <section id="projects" className="py-24 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-pink-50 border border-pink-100 rounded-xl">
                                02
                            </span>
                            <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                                Projects
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-800">
                            Featured Work
                        </h2>
                    </div>
                    <a
                        href="/project"
                        className="text-sm text-gray-400 hover:text-[#ec4899] transition-colors flex items-center gap-2 group"
                    >
                        View All
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project) => (
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

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm mb-4">
                        Interested in collaborating?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-pink-200 text-gray-700 rounded-full hover:border-[#ec4899] hover:text-[#ec4899] transition-colors bg-white"
                    >
                        Let's Talk
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
