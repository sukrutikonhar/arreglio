'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SwedenSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/sweden-workshop.jpg"
                    alt="Swedish Workshop"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>
            </div>

            {/* Swedish Flag Inspired Design Elements */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#006AA7]"></div>
            <div className="absolute top-0 left-8 w-2 h-full bg-[#FECC02]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                            BUILT IN SWEDEN, MADE FOR WORKSHOPS EVERYWHERE
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl"
                    >
                        <div className="flex items-start gap-6">
                            {/* Swedish Design Icon */}
                            <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-primary/5 rounded-full items-center justify-center">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Arreglio was born in Sweden, where efficiency, design, and simplicity are part of everyday life.
                                    We saw how local workshops were struggling with outdated systems, missed bookings, and paper-based chaos.
                                    So we built something better.
                                </p>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group font-medium"
                                >
                                    <span>READ OUR STORY</span>
                                    <svg
                                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Swedish Design Elements */}
                    <div className="absolute -bottom-4 right-0 w-32 h-32 bg-[#006AA7]/10 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FECC02]/10 rounded-full blur-2xl"></div>
                </div>
            </div>
        </section>
    );
} 