import { skillCategories, marqueeItems } from '@/datadummy';

export default function Skill() {

    return (
        <section
            id="skills"
            className="py-24 lg:py-32 bg-gradient-to-b from-[#fdf2f8] to-white relative"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-pink-50 border border-pink-100 rounded-xl">
                                03
                            </span>
                            <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                                Skills
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-800">
                            What I Do
                        </h2>
                    </div>

                    <p className="text-gray-500 max-w-sm text-sm">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                    {skillCategories.map((cat, i) => (
                        <div
                            key={cat.title}
                            className="bg-white border border-pink-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-pink-200 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-[#ec4899] text-sm font-medium">
                                    0{i + 1}
                                </span>
                                <h3 className="text-lg font-medium text-gray-800">
                                    {cat.title}
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {cat.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-3 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-pink-200 group-hover:bg-[#ec4899] transition-colors" />
                                        <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Marquee */}
                <div className="mt-20 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fdf2f8] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fdf2f8] to-transparent z-10" />

                    <div className="flex gap-8 animate-marquee">
                        {[...marqueeItems, ...marqueeItems].map((item, i) => (
                            <span
                                key={i}
                                className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-pink-100 whitespace-nowrap select-none"
                            >
                                {item}
                                <span className="text-[#ec4899] mx-6">•</span>
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
