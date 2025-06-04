'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PlatformSection() {
    return (
        <section className="pt-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        One Platform for All Things Repair
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Arreglio is a <span className="text-secondary font-medium">digital platform</span> that connects customers to local repair shops and helps workshop owners run their business effortlessly.
                    </p>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        From booking to payments to customer engagement, everything is streamlined in one place.
                    </p>
                </div>

                {/* Video Section */}
                <div className="max-w-4xl mx-auto relative z-10" style={{ marginBottom: '-15rem' }}>
                    <div className="relative">
                        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
                            {/* Overlay for better contrast */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 z-10"></div>

                            <Image
                                src="/images/hero/video-mockup.png"
                                alt="Platform Demo"
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />

                            {/* Play button with enhanced visibility */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary shadow-lg">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white transform translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-secondary font-medium group text-lg"
                            >
                                <span className="relative">
                                    Watch Demo
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
        </section>
    );
} 