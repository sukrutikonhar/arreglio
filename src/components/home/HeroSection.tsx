'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const t = useTranslations('Home');
    const imageAnimDuration = 0.8;

    return (
        <section className="relative bg-primary min-h-[calc(100vh-4rem)] pt-16 lg:pt-0">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center min-h-[calc(100vh-4rem)]">
                    {/* Content */}
                    <div className="relative z-20 pt-8 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: imageAnimDuration + 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Fixing <span className="text-secondary">Repairs</span><br />
                                for Everyone
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: imageAnimDuration + 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <p className="text-xl text-[#cacaca] mb-8">
                                Connecting customers and workshops through<br />
                                a smart platform built on trust and simplicity.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: imageAnimDuration + 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" asChild>
                                <Link href="/get-started">{t('hero.primaryCTA')}</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/services">{t('hero.secondaryCTA')}</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Mockups */}
                    <motion.div
                        className="relative w-full py-8 lg:py-12"
                        initial={{ opacity: 0, scale: 0.92, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: imageAnimDuration,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[400/550] max-h-[550px] mx-auto">
                            {/* Workshop Manager App */}
                            <motion.div
                                className="absolute left-0 top-0 w-[200px] xs:w-[220px] sm:w-[260px]"
                                initial={{ x: -20, opacity: 0, rotate: -12 }}
                                animate={{ x: 0, opacity: 1, rotate: -12 }}
                                whileHover={{ rotate: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2
                                }}
                            >
                                <div className="w-full bg-white rounded-[2rem] shadow-2xl p-2">
                                    <div className="w-full h-full aspect-[9/19] bg-gradient-to-b from-[#2ECC71] to-[#27AE60] rounded-[1.8rem] relative overflow-hidden">
                                        {/* Phone header */}
                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>

                                        {/* App interface */}
                                        <div className="p-4 pt-12 text-white">
                                            <div className="text-center mb-4">
                                                <h3 className="text-base sm:text-lg font-bold mb-1">Workshop Hub</h3>
                                                <p className="text-xs opacity-80">Your Business Dashboard</p>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="bg-white bg-opacity-20 rounded-lg p-2">
                                                    <div className="text-xs opacity-80">Pending Repairs</div>
                                                    <div className="text-sm font-bold">8 Jobs</div>
                                                </div>

                                                <div className="bg-white bg-opacity-20 rounded-lg p-2">
                                                    <div className="text-xs opacity-80">Today's Revenue</div>
                                                    <div className="text-sm font-bold">€1,850</div>
                                                </div>

                                                <div className="bg-white bg-opacity-20 rounded-lg p-2">
                                                    <div className="text-xs opacity-80">Workshop Rating</div>
                                                    <div className="text-sm font-bold">4.9 ★</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Customer App */}
                            <motion.div
                                className="absolute right-0 top-0 w-[200px] xs:w-[220px] sm:w-[260px]"
                                initial={{ x: 20, opacity: 0, rotate: 12 }}
                                animate={{ x: 0, opacity: 1, rotate: 12 }}
                                whileHover={{ rotate: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3
                                }}
                            >
                                <div className="w-full bg-white rounded-[2rem] shadow-2xl p-2">
                                    <div className="w-full h-full aspect-[9/19] bg-gradient-to-b from-[#3498DB] to-[#2980B9] rounded-[1.8rem] relative overflow-hidden">
                                        {/* Phone header */}
                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>

                                        {/* App interface */}
                                        <div className="p-4 pt-12 text-white">
                                            <div className="text-center mb-4">
                                                <h3 className="text-base sm:text-lg font-bold mb-1">Find Repairs</h3>
                                                <p className="text-xs opacity-80">Near You</p>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="bg-white rounded-lg p-2 text-gray-800">
                                                    <div className="font-semibold text-xs sm:text-sm">Cykel Express</div>
                                                    <div className="text-xs text-gray-600">0.5 km • Bike Repairs</div>
                                                    <div className="text-xs">★★★★★ (4.9)</div>
                                                </div>

                                                <div className="bg-white rounded-lg p-2 text-gray-800">
                                                    <div className="font-semibold text-xs sm:text-sm">Tools & Fix</div>
                                                    <div className="text-xs text-gray-600">1.2 km • Power Tools</div>
                                                    <div className="text-xs">★★★★☆ (4.6)</div>
                                                </div>

                                                <button className="w-full bg-[#2ECC71] text-white py-1.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#27AE60] transition-colors">
                                                    Book Repair Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 