"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import { socials } from '@/datadummy';

type FormState = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });

    const [sending, setSending] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        setTimeout(() => {
            alert('Message sent! (Demo)');
            setForm({ name: '', email: '', message: '' });
            setSending(false);
        }, 1000);
    };

    const handleChange =
        (field: keyof FormState) =>
            (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setForm({ ...form, [field]: e.target.value });
            };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-white relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-100 rounded-full blur-3xl opacity-50" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-pink-50 border border-pink-200 rounded-xl">
                                    04
                                </span>
                                <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                                <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                                    Contact
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-800">
                                Let's Build Something Great
                            </h2>
                            <p className="text-gray-500 mt-3">
                                Aku membantu membuat tampilan yang cantik, fungsional, dan nyaman digunakan.
                            </p>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.link}
                                    aria-label={s.name}
                                    className="w-10 h-10 flex items-center justify-center text-gray-400 bg-[#fdf2f8] border border-pink-100 rounded-xl hover:text-[#ec4899] hover:border-[#ec4899] transition-all"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={s.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-[#fdf2f8] border border-pink-100 rounded-3xl p-6 lg:p-8 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            <input
                                type="text"
                                value={form.name}
                                onChange={handleChange('name')}
                                placeholder="Your name"
                                required
                                className="w-full px-4 py-3.5 text-sm text-gray-700 bg-white border border-pink-100 rounded-xl outline-none focus:border-[#ec4899] focus:ring-2 focus:ring-pink-100 transition-all placeholder:text-gray-300"
                            />

                            <input
                                type="email"
                                value={form.email}
                                onChange={handleChange('email')}
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-3.5 text-sm text-gray-700 bg-white border border-pink-100 rounded-xl outline-none focus:border-[#ec4899] focus:ring-2 focus:ring-pink-100 transition-all placeholder:text-gray-300"
                            />

                            <textarea
                                value={form.message}
                                onChange={handleChange('message')}
                                rows={4}
                                required
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3.5 text-sm text-gray-700 bg-white border border-pink-100 rounded-xl outline-none focus:border-[#ec4899] focus:ring-2 focus:ring-pink-100 transition-all placeholder:text-gray-300 resize-none"
                            />

                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#ec4899] text-white rounded-xl hover:bg-[#db2777] transition-all disabled:opacity-50 shadow-lg shadow-pink-200"
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
