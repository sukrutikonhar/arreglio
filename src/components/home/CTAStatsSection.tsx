'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface StatItemProps {
    endValue: number;
    suffix: string;
    label: string;
    description: string;
    duration?: number;
}

const StatItem = ({ endValue, suffix, label, description, duration = 2 }: StatItemProps) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(countRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (duration * 1000), 1);
                const currentCount = Math.floor(progress * endValue);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };

            updateCount();
            controls.start({ opacity: 1, y: 0 });
        }
    }, [isInView, endValue, duration, controls]);

    return (
        <motion.div
            ref={countRef}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="text-[4rem] font-bold text-secondary mb-2 leading-none flex items-center">
                {count}<span className="text-2xl ml-1 inline-flex items-center h-full">{suffix}</span>
            </div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 text-center">
                {label}
            </h3>
            <p className="text-gray-600 text-sm text-center">
                {description}
            </p>
        </motion.div>
    );
};

export default function CTAStatsSection() {
    const stats = [
        {
            endValue: 100,
            suffix: '+',
            label: 'WORKSHOPS ONBOARDED',
            description: 'From solo mechanics to busy multi-location chains, workshops across Sweden and beyond are using Arreglio to bring order to their operations.',
            duration: 2
        },
        {
            endValue: 5,
            suffix: '★',
            label: 'RATINGS',
            description: 'Rated 5 stars by workshops that made the switch to Arreglio. Workshop owners love how simple, fast, and reliable Arreglio is.',
            duration: 1
        },
        {
            endValue: 45,
            suffix: '%',
            label: 'MORE BUSINESS REPORTED',
            description: 'Workshops using Arreglio report faster bookings, more repeat customers, and fewer no-shows without working longer hours.',
            duration: 1.5
        }
    ];

    return (
        <section className="relative overflow-hidden">
            {/* Unified Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/25 via-secondary/15 to-white"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-secondary/20 to-transparent rounded-full blur-3xl -z-10"></div>

            {/* CTA Section */}
            <div className="relative z-10 pt-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto backdrop-blur-md p-6 md:p-10">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Content */}
                            <div className="relative max-w-xl">
                                <div className="absolute -left-20 top-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
                                <h2 className="text-3xl md:text-4xl font-bold !text-primary mb-6">
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
                                        Digitize My Repair Shop
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

                            {/* Device Mockups Replaced with Single Laptop Image */}
                            <div className="relative flex justify-center items-center">
                                {/* Floating background element (optional) */}
                                <div className="absolute -right-20 bottom-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10"></div>

                                {/* Laptop Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true }}
                                    className="relative z-10 max-w-[640px] mx-auto"
                                >
                                    <Image
                                        src="/images/home/laptop-mock.jpg"
                                        alt="Laptop showing Arreglio dashboard"
                                        width={640}
                                        height={400}
                                        className="rounded-xl shadow-2xl w-full h-auto"
                                    />
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative z-10 mt-10 py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold !text-primary mb-6">
                            Trusted by Workshops That<br />Just Want to{' '}
                            <span className="text-secondary">Work Smarter</span>
                        </h2>
                        <p className="text-lg !text-gray-600">
                            Join thousands of repair shops and customers who trust Arreglio to streamline their repair experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {stats.map((stat, index) => (
                            <StatItem
                                key={index}
                                endValue={stat.endValue}
                                suffix={stat.suffix}
                                label={stat.label}
                                description={stat.description}
                                duration={stat.duration}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 