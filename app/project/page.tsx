import Link from 'next/link';
import { projects } from '@/datadummy/projects';

export default function ProjectsPage() {
    const categories = ['All', 'Web App', 'UI/UX'];

    return (
        <main className="min-h-screen bg-[#fdf2f8]">
            {/* Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Title */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <Link href="/" className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-white border border-pink-100 rounded-xl">
                                    🔙
                                </Link>
                                <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                                <span className="text-xs font-medium uppercase tracking-widest text-gray-500">Portfolio</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-800">
                                All Projects
                            </h1>
                            <p className="text-gray-500 mt-3 max-w-lg">
                                A collection of my work across web development and UI/UX design.
                            </p>
                        </div>

                        {/* Filter */}
                        <div className="flex gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className="px-4 py-2 text-sm font-medium rounded-full border border-pink-100 bg-white text-gray-600 hover:border-[#ec4899] hover:text-[#ec4899] transition-all first:bg-[#ec4899] first:text-white first:border-[#ec4899]"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* List Project */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Link href={`/project/${project.id}`} key={project.id} className="group">
                                <article className="h-full bg-white border border-pink-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-pink-200 transition-all duration-300 hover:-translate-y-1">
                                    {/* Project Image */}
                                    <div className="relative h-52 overflow-hidden bg-pink-50">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Category Badge */}
                                        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-[#ec4899] bg-white/90 backdrop-blur-sm rounded-full border border-pink-100">
                                            {project.category}
                                        </span>

                                        {/* Number */}
                                        <span className="absolute bottom-4 left-4 text-xs text-white font-mono bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                                            0{index + 1}
                                        </span>

                                        {/* Arrow */}
                                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-pink-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 shadow-md">
                                            <svg className="w-4 h-4 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-[#ec4899] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-5 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 text-xs text-gray-500 bg-pink-50 border border-pink-100 rounded-full"
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

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium border border-pink-200 text-gray-700 rounded-full hover:border-[#ec4899] hover:text-[#ec4899] transition-all bg-white shadow-sm">
                            Load More Projects
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
