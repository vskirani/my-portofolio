import Link from "next/link";
import ListProject from "../components/section/ListProject";
import { Suspense } from "react";
import FilterButtons from "../components/section/FilterButtons";

interface ProjectsPageProps {
    searchParams: Promise<{ category?: string }>;  // <-- tipe-nya Promise
}


export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
    const params = await searchParams;  // <-- await di sini
    const currentCategory = params.category || 'All';
    console.log('halaman page:', currentCategory);
    return (
        <main className="min-h-screen bg-[#fdf2f8]">
            {/* Header */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <Link
                                    href="/"
                                    className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-white border border-pink-100 rounded-xl"
                                >
                                    🔙
                                </Link>
                                <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                                <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                                    Portfolio
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-800">
                                All Projects
                            </h1>
                            <p className="text-gray-500 mt-3 max-w-lg">
                                A collection of my work across web development
                                and UI/UX design.
                            </p>
                        </div>

                        {/* Filter */}
                        <Suspense fallback={<div>Loading...</div>}>
                            <FilterButtons />
                        </Suspense>
                    </div>
                </div>
            </section>

            <ListProject category={currentCategory} />
        </main>
    );
}
