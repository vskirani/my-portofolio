export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialUrl: string;
}

export const certificates: Certificate[] = [
    {
        title: 'React Developer Certificate',
        issuer: 'Dicoding Indonesia',
        date: '2024',
        image: '/foto.png',
        credentialUrl: '#',
    },
    {
        title: 'UI/UX Design Fundamentals',
        issuer: 'Google',
        date: '2024',
        image: '/foto.png',
        credentialUrl: '#',
    },
    {
        title: 'Frontend Web Development',
        issuer: 'Coursera',
        date: '2023',
        image: '/foto.png',
        credentialUrl: '#',
    },
    {
        title: 'JavaScript Algorithms',
        issuer: 'freeCodeCamp',
        date: '2023',
        image: '/foto.png',
        credentialUrl: '#',
    },
];
