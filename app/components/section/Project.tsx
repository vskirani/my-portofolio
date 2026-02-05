import Link from "next/link";
import { projects, Project } from "@/datadummy/projects";

export default function Projects() {
    const featuredProjects = projects.slice(0, 3);

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
                    {featuredProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/project/${project.id}`}
                            className="group block"
                        >
                            <article className="h-full bg-[#fdf2f8] border border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-pink-200 transition-all">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden bg-pink-50">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {/* Number */}
                                    <span className="absolute top-4 left-4 text-xs text-white font-mono bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
                                        0{index + 1}
                                    </span>

                                    {/* Arrow */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-pink-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 shadow-sm">
                                        <svg
                                            className="w-3.5 h-3.5 text-[#ec4899]"
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
                                <div className="p-5 bg-white">
                                    <h3 className="text-base font-medium text-gray-800 mb-2 group-hover:text-[#ec4899] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs text-gray-500 bg-pink-50 border border-pink-100 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
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
