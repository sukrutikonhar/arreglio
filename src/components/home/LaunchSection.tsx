'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FeatureCard = ({ title }: { title: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#2D3748] p-8 rounded-2xl backdrop-blur-sm hover:bg-[#2D3748]/90 transition-all duration-300 group min-w-[320px]"
    >
        <div className="flex justify-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {title.includes('Setup') && (
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                )}
                {title.includes('Platform') && (
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                )}
                {title.includes('1-on-1') && (
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                )}
            </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 text-center whitespace-nowrap">{title}</h3>
        <p className="text-gray-300 text-sm text-center">
            {title.includes('Setup') && 'Get started quickly with our guided setup process'}
            {title.includes('Platform') && 'No feature restrictions'}
            {title.includes('1-on-1') && 'Personal guidance and support'}
        </p>
    </motion.div>
);

export default function LaunchSection() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-secondary/20 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6  md:px-40"
                    >
                        Launch Your Workshop With Arreglio |{' '}
                        <span className="text-secondary">Free For 2 Months</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
                    >
                        We know switching from pen-and-paper or spreadsheets can feel overwhelming. That's why
                        we're making it easy to get started with Arreglio - risk free.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <FeatureCard title="Free Setup & Onboarding" />
                        <FeatureCard title="Full Platform Access" />
                        <FeatureCard title="1-on-1 Onboarding" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link
                            href="/signup"
                            className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
                        >
                            START FREE TRIAL
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/book-demo"
                            className="text-white hover:text-secondary transition-colors flex items-center gap-2 group"
                        >
                            <span>Book a Demo</span>
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
            </div>
        </section>
    );
} 