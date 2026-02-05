export interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
    githubUrl: string;
    liveUrl: string;
    roles: string[];
    problem: string;
    solution: string;
    designProcess: string[];
    finalUI: string[];
    techUsed: { name: string; icon?: string }[];
    result: string;
}

export const projects: Project[] = [
    {
        id: '1',
        image: '/foto.png',
        title: 'E-Commerce Dashboard',
        description: 'Admin dashboard with analytics, product management, and real-time reporting.',
        tags: ['React', 'Tailwind', 'Chart.js'],
        category: 'Web App',
        githubUrl: 'https://github.com/vskirani/ecommerce-dashboard',
        liveUrl: 'https://ecommerce-dashboard.vercel.app',
        roles: [
            'Frontend Developer',
            'UI/UX Designer',
            'Data Visualization Specialist',
        ],
        problem: 'Bisnis e-commerce membutuhkan dashboard yang dapat menampilkan data penjualan, inventaris, dan performa secara real-time. Dashboard yang ada sebelumnya lambat dan sulit digunakan.',
        solution: 'Membangun dashboard modern dengan React dan Chart.js yang menampilkan visualisasi data interaktif, manajemen produk yang mudah, dan notifikasi real-time untuk pesanan baru.',
        designProcess: [
            '/foto.png',
            '/foto.png',
            '/foto.png',
        ],
        finalUI: [
            '/foto.png',
            '/foto.png',
        ],
        techUsed: [
            { name: 'React' },
            { name: 'Tailwind CSS' },
            { name: 'Chart.js' },
            { name: 'Node.js' },
            { name: 'MongoDB' },
        ],
        result: 'Dashboard berhasil meningkatkan efisiensi operasional sebesar 40% dan mengurangi waktu analisis data dari 2 jam menjadi 15 menit per hari.',
    },
    {
        id: '2',
        image: '/foto.png',
        title: 'Travel Booking App',
        description: 'Mobile app design for seamless travel booking experience.',
        tags: ['Figma', 'UI/UX', 'Prototype'],
        category: 'UI/UX',
        githubUrl: 'https://github.com/vskirani/travel-app',
        liveUrl: 'https://travel-app-demo.vercel.app',
        roles: [
            'UI/UX Designer',
            'User Researcher',
            'Prototyping Specialist',
        ],
        problem: 'Aplikasi travel booking yang ada memiliki UX yang kompleks dengan terlalu banyak langkah untuk melakukan pemesanan, menyebabkan banyak pengguna abandon di tengah proses.',
        solution: 'Mendesain ulang alur pemesanan dengan pendekatan mobile-first, mengurangi langkah pemesanan dari 8 menjadi 3 langkah dengan UI yang intuitif dan modern.',
        designProcess: [
            '/foto.png',
            '/foto.png',
        ],
        finalUI: [
            '/foto.png',
            '/foto.png',
            '/foto.png',
        ],
        techUsed: [
            { name: 'Figma' },
            { name: 'Adobe XD' },
            { name: 'Protopie' },
        ],
        result: 'Desain baru meningkatkan conversion rate sebesar 65% dan mengurangi bounce rate sebesar 30%.',
    },
    {
        id: '3',
        image: '/foto.png',
        title: 'Portfolio Website',
        description: 'Personal portfolio with 3D elements and smooth animations.',
        tags: ['React', 'Three.js', 'CSS'],
        category: 'Web App',
        githubUrl: 'https://github.com/vskirani/portfolio',
        liveUrl: 'https://kirani.vercel.app',
        roles: [
            'Full Stack Developer',
            'UI/UX Designer',
            '3D Artist',
        ],
        problem: 'Membutuhkan portfolio yang dapat menampilkan karya dengan cara yang menarik dan interaktif, berbeda dari portfolio template pada umumnya.',
        solution: 'Membangun portfolio dengan elemen 3D menggunakan Three.js, animasi smooth dengan Framer Motion, dan desain yang clean dengan warna pink aesthetic.',
        designProcess: [
            '/foto.png',
            '/foto.png',
        ],
        finalUI: [
            '/foto.png',
        ],
        techUsed: [
            { name: 'Next.js' },
            { name: 'Three.js' },
            { name: 'Tailwind CSS' },
            { name: 'Framer Motion' },
        ],
        result: 'Portfolio berhasil menarik perhatian recruiter dan mendapatkan 3 project freelance dalam 2 bulan pertama.',
    },
    {
        id: '4',
        image: '/foto.png',
        title: 'Task Management App',
        description: 'Collaborative task management with real-time updates and notifications.',
        tags: ['Next.js', 'Prisma', 'PostgreSQL'],
        category: 'Web App',
        githubUrl: 'https://github.com/vskirani/task-app',
        liveUrl: 'https://task-app.vercel.app',
        roles: [
            'Full Stack Developer',
            'Backend Developer',
            'Database Designer',
        ],
        problem: 'Tim remote membutuhkan aplikasi task management yang ringan namun powerful dengan fitur kolaborasi real-time.',
        solution: 'Membangun aplikasi task management dengan fitur drag-and-drop, real-time sync, dan notifikasi push untuk update task.',
        designProcess: [
            '/foto.png',
        ],
        finalUI: [
            '/foto.png',
            '/foto.png',
        ],
        techUsed: [
            { name: 'Next.js' },
            { name: 'Prisma' },
            { name: 'PostgreSQL' },
            { name: 'Socket.io' },
        ],
        result: 'Aplikasi digunakan oleh 50+ user aktif dengan rating kepuasan 4.8/5.',
    },
    {
        id: '5',
        image: '/foto.png',
        title: 'Food Delivery UI',
        description: 'Modern food delivery app interface with intuitive ordering flow.',
        tags: ['Figma', 'UI Design', 'Mobile'],
        category: 'UI/UX',
        githubUrl: 'https://github.com/vskirani/food-delivery-ui',
        liveUrl: 'https://figma.com/food-delivery',
        roles: [
            'UI Designer',
            'Interaction Designer',
            'Visual Designer',
        ],
        problem: 'Aplikasi food delivery existing memiliki UI yang outdated dan flow pemesanan yang membingungkan pengguna.',
        solution: 'Redesign complete dengan focus pada visual hierarchy yang jelas, one-tap ordering, dan tracking yang informatif.',
        designProcess: [
            '/foto.png',
            '/foto.png',
        ],
        finalUI: [
            '/foto.png',
            '/foto.png',
        ],
        techUsed: [
            { name: 'Figma' },
            { name: 'Illustrator' },
        ],
        result: 'Design system yang dibuat dapat digunakan untuk 20+ screen dengan konsistensi tinggi.',
    },
    {
        id: '6',
        image: '/foto.png',
        title: 'Finance Tracker',
        description: 'Personal finance tracking app with expense categorization and insights.',
        tags: ['React', 'TypeScript', 'Firebase'],
        category: 'Web App',
        githubUrl: 'https://github.com/vskirani/finance-tracker',
        liveUrl: 'https://finance-tracker.vercel.app',
        roles: [
            'Frontend Developer',
            'UI/UX Designer',
            'Firebase Developer',
        ],
        problem: 'Orang kesulitan tracking pengeluaran harian dan tidak memiliki insight tentang spending habits mereka.',
        solution: 'Aplikasi finance tracker dengan auto-categorization, visualisasi spending, dan reminder untuk budget limits.',
        designProcess: [
            '/foto.png',
        ],
        finalUI: [
            '/foto.png',
            '/foto.png',
        ],
        techUsed: [
            { name: 'React' },
            { name: 'TypeScript' },
            { name: 'Firebase' },
            { name: 'Chart.js' },
        ],
        result: 'User berhasil menghemat rata-rata 20% pengeluaran bulanan setelah menggunakan aplikasi selama 3 bulan.',
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}
