'use client';

import { useRouter, useSearchParams } from "next/navigation";

type Category = {
    label: string;
    value: string | null;
};
const categories: Category[] = [
    { label: "All", value: null },
    { label: "UI/UX", value: "1" },
    { label: "Website", value: "2" },
    { label: "Aplikasi", value: "3" },
];

export default function FilterButtons() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentCategory = searchParams.get('category') || 'All';



    const handleFilterClick = (value: string | null) => {
        if (value === null) {
            router.push('/project');
        } else {
            router.push(`/project?category=${value}`);
        }
    };

    return (
        <div className="flex gap-2">
            {categories.map((cat) => (
                <button
                    key={cat.label}
                    onClick={() => handleFilterClick(cat.value)}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${currentCategory === cat.value
                        ? 'bg-[#ec4899] text-white border-[#ec4899]'
                        : 'border-pink-100 bg-white text-gray-600 hover:border-[#ec4899] hover:text-[#ec4899]'
                        }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
}