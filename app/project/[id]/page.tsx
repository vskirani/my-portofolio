import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectByIDService } from '@/src/services/project.service';

interface PageProps {
    params: Promise<{ id: string }>;
}



export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params;
    const response = await getProjectByIDService(id);
    const project = response.data;

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-[#fdf2f8]">
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/" className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-white border border-pink-100 rounded-xl">
                            🔙
                        </Link>
                        <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                        {project.techStacks.map((tech) => (
                            <span
                                key={tech.name}
                                className="text-xs font-medium uppercase tracking-widest text-gray-500"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-800 mb-4">
                        {project.title}
                    </h1>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {project.projectUrl && (
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#ec4899] text-white rounded-full hover:bg-pink-600 transition-all shadow-lg shadow-pink-200"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 76 76" fill="currentColor">
                                    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Image */}
            <section className="px-6 mt-10">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-pink-100">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-[400px] lg:h-[500px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Deskripsi */}
                    <p className="text-lg text-gray-500 max-w-2xl mb-8">
                        {project.description}
                    </p>

                    {/* My Role */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <h2 className="text-2xl font-semibold text-gray-800">My Role</h2>
                        </div>
                        <ul className="space-y-3 pl-13">
                            {project.project_responsibilities.map((responsibility) => (
                                <li key={responsibility.id} className="flex items-start gap-3 text-gray-600">
                                    <span className="w-2 h-2 rounded-full bg-[#ec4899] mt-2 flex-shrink-0" />
                                    <span>{responsibility.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Problem */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#ec4899]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <h2 className="text-2xl font-semibold text-gray-800">Problem</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-13">
                            {project.problem}
                        </p>
                    </div>

                    {/* Solution */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </span>
                            <h2 className="text-2xl font-semibold text-gray-800">Solution</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-13">
                            {project.solution}
                        </p>
                    </div>

                    {/* Result */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 rounded-xl bg-white border border-pink-100 flex items-center justify-center text-[#ec4899]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </span>
                            <h2 className="text-2xl font-semibold text-gray-800">Result</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-13">
                            {project.result}
                        </p>
                    </div>

                    {/* Design Process */}
                    <div className="mt-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </span>
                            <h2 className="text-2xl font-semibold text-gray-800">Design Process</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.designProcess.map((img, i) => (
                                <div key={i} className="rounded-xl overflow-hidden border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                                    <img src={img} alt={`Design process ${i + 1}`} className="w-full h-48 object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Used */}
                    <div className="mt-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </span>
                            <h2 className="text-2xl font-semibold text-gray-800">Tech Used</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {project.techStacks.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-[#fdf2f8] border border-pink-100 rounded-xl hover:border-pink-200 transition-colors"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


        </main>
    );
}
