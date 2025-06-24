'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTools, FaShieldAlt, FaClock, FaCreditCard } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export default function CustomerHero() {
    const features: { icon: IconType; text: string }[] = [
        { icon: FaTools, text: 'Local Repair Experts' },
        { icon: FaShieldAlt, text: 'Transparent Pricing' },
        { icon: FaClock, text: 'Real‑Time Updates' },
        { icon: FaCreditCard, text: 'Secure, Seamless Payments' },
    ];


    return (
        <section className="bg-gradient-to-br from-primary via-primary-dark to-primary min-h-[calc(100vh-4rem)] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 h-full relative z-10">
                <div className="grid grid-cols-12 gap-8 items-center h-full py-12 lg:py-0">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white col-span-12 lg:col-span-7"
                    >
                        {/* Banner */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6"
                        >
                            Repairs Made Easy, For Everyone
                        </motion.div> */}

                        <h1 className="max-w-xl text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                            Repairs Made Easy,{' '}
                            <span className="text-secondary">For Everyone</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">When something breaks, we fix more than the problem, we fix the hassle too.</p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Link
                                href="https://store.arreglio.com/register"
                                className="inline-block bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Find a Repair Shop
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-center lg:justify-end relative col-span-12 lg:col-span-5 mt-8 lg:mt-0"
                    >
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-0 w-12 h-12 text-secondary opacity-50 hidden lg:block"
                        >
                            <Image
                                src="/images/icons/gear-icon.png"
                                alt=""
                                width={48}
                                height={48}
                                className="w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-16 bottom-1/4 w-16 h-16 text-secondary opacity-30 hidden lg:block"
                        >
                            <Image
                                src="/images/icons/gear-icon.png"
                                alt=""
                                width={64}
                                height={64}
                                className="w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-8 top-1/4 w-14 h-14 text-secondary opacity-40 hidden lg:block"
                        >
                            <Image
                                src="/images/icons/gear-icon.png"
                                alt=""
                                width={56}
                                height={56}
                                className="w-full h-auto"
                            />
                        </motion.div>

                        {/* Phone Mockup */}
                        <div className="relative transform rotate-6 py-12">
                            <div className="w-72 sm:w-80 h-[580px] bg-white rounded-[3rem] p-3 shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-b from-[#2ECC71] to-[#27AE60] rounded-[2.5rem] relative overflow-hidden">
                                    {/* Phone content */}
                                    <div className="p-6 text-white">
                                        <div className="text-center mb-8">
                                            <h3 className="text-white font-bold text-xl mb-2">arreglio</h3>
                                            <h2 className="text-2xl font-bold mb-2">Find & Book</h2>
                                            <p className="text-gray-100 text-sm">Repair Services</p>
                                        </div>

                                        <div className="bg-white rounded-xl p-4 mb-6">
                                            <p className="text-gray-800 text-sm mb-3">What needs fixing?</p>
                                            <div className="flex gap-2 mb-3">
                                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                                <span className="w-8 h-2 bg-gray-400 rounded-full"></span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="w-6 h-2 bg-secondary rounded-full"></span>
                                                <span className="w-4 h-2 bg-gray-300 rounded-full"></span>
                                                <span className="w-4 h-2 bg-gray-300 rounded-full"></span>
                                            </div>
                                        </div>

                                        <div className="bg-white/20 rounded-xl p-4 mb-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 bg-white rounded-full"></div>
                                                <div>
                                                    <p className="text-sm font-medium">Bike Repair Shop</p>
                                                    <p className="text-xs text-gray-200">⭐ 4.8 (120 reviews)</p>
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-200">Available today • 2.3 km away</p>
                                        </div>

                                        <button className="w-full bg-white text-secondary py-3 rounded-xl font-semibold transition-colors text-base">
                                            Book Now
                                        </button>

                                        <div className="mt-6 text-center">
                                            <div className="flex justify-center gap-2 mb-3">
                                                <span className="w-8 h-1 bg-white rounded-full"></span>
                                                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                                                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 