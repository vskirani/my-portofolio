export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Development',
        skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
        title: 'Design',
        skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Wireframing'],
    },
    {
        title: 'Tools',
        skills: ['Git', 'VS Code', 'Notion', 'Vercel', 'DevTools'],
    },
];

export const marqueeItems: string[] = [
    'Frontend',
    'UI/UX',
    'React',
    'Design',
    'JavaScript',
    'Figma',
    'Clean Code',
    'Responsive',
];
