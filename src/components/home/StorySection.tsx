'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function StorySection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="bg-white rounded-[2rem] shadow-xl overflow-hidden relative max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>

                    <div className="relative p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Image Section with Organic Circle Shape */}
                            <div className="w-full md:w-1/2 relative">
                                <div className="relative aspect-square">
                                    {/* SVG Mask for organic circle */}
                                    <svg
                                        className="absolute w-full h-full"
                                        viewBox="0 0 400 400"
                                        style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))' }}
                                    >
                                        <defs>
                                            <clipPath id="blob-shape">
                                                <path
                                                    d="M200,400 C400,400 400,300 400,200 C400,100 350,0 200,0 C50,0 0,100 0,200 C0,300 0,400 200,400 Z"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0" style={{ clipPath: 'url(#blob-shape)' }}>
                                        <Image
                                            src="/images/hero/story.jpg"
                                            alt="Arreglio Platform"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    {/* Stats Card */}
                                    {/* <div className="absolute bottom-10 right-0 bg-white rounded-xl shadow-lg p-6 transform translate-x-1/4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-primary">250+</div>
                                                <div className="text-sm text-gray-600">Services Done</div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2">
                                <div className="max-w-xl">
                                    <h2 className="text-4xl font-bold text-primary mb-6">
                                        Built in Sweden, Made for Workshops Everywhere
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        Arreglio was born in Sweden, where efficiency, design, and simplicity are part of everyday life.
                                        We saw how local workshops were struggling with outdated systems, missed bookings, and paper-based chaos.
                                        So we built something better.
                                    </p>
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center gap-2 text-secondary font-medium group text-lg"
                                    >
                                        <span className="relative">
                                            Read Our Story
                                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                                        </span>
                                        <svg
                                            className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 