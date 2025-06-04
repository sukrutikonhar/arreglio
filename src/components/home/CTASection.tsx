'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
    const features = [
        'Free Setup & Onboarding',
        'Full Platform Access',
        '1-on-1 Onboarding'
    ];

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/5 to-secondary/15"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-secondary/30 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-full h-[400px] bg-gradient-to-t from-secondary/25 to-twhitet -z-10"></div>
            <div className="relative py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto backdrop-blur-md p-6 md:p-10">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Content */}
                            <div className="relative max-w-xl">
                                <div className="absolute -left-20 top-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                    Whether you need a fix or run a repair shop, {' '}
                                    <span className="relative inline-block">
                                        <span className="relative z-10">Arreglio</span>
                                        <svg className="absolute -bottom-1 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                                            <path d="M0,3 C5,3 10,1 15,1 L85,1 C90,1 95,3 100,3" stroke="#2ECC71" strokeWidth="2" fill="none" />
                                        </svg>
                                    </span>
                                    {' '}connects both sides through one smart, transparent platform.
                                </h2>
                                <div className="mt-8">
                                    <button className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        DIGITIZE MY REPAIR SHOP
                                        <svg
                                            className="w-5 h-5"
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
                                    </button>
                                </div>
                            </div>

                            {/* Device Mockups */}
                            <div className="relative">
                                <div className="absolute -right-20 bottom-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
                                {/* Desktop */}
                                <div className="relative z-10 bg-white/90 rounded-lg shadow-xl p-2 max-w-[500px] mx-auto backdrop-blur-md">
                                    <Image
                                        src="/images/hero/dashboard-preview.png"
                                        alt="Arreglio Dashboard"
                                        width={600}
                                        height={400}
                                        className="rounded-md w-full"
                                    />
                                </div>
                                {/* Mobile */}
                                <div className="absolute -bottom-10 -right-6 w-48 bg-white/90 rounded-lg shadow-xl p-2 transform rotate-12 backdrop-blur-md">
                                    <Image
                                        src="/images/hero/phone-mockup.png"
                                        alt="Arreglio Mobile App"
                                        width={200}
                                        height={400}
                                        className="rounded-md w-full"
                                    />
                                </div>
                                {/* Tablet */}
                                <div className="absolute -left-6 -bottom-20 w-64 bg-white/90 rounded-lg shadow-xl p-2 transform -rotate-12 backdrop-blur-md">
                                    <Image
                                        src="/images/hero/dashboard-preview.png"
                                        alt="Arreglio Tablet View"
                                        width={300}
                                        height={200}
                                        className="rounded-md w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 