'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WorkshopHero() {
    return (
        <section className="bg-primary min-h-[calc(100vh-4rem)] relative overflow-hidden">
            <div className="container mx-auto px-4 h-full">
                <div className="grid grid-cols-12 gap-0 lg:gap-12 items-center h-full py-12 lg:py-0">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white col-span-12 lg:col-span-7 sm:px-6 lg:px-0 max-w-full break-words"
                    >
                        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                            <span className="block">Simplify Your Repairs.</span>
                            <span className="text-secondary block">Impress Your Customers.</span>
                        </h1>
                        <p className="text-base sm:text-xl text-gray-300 mb-8 max-w-2xl">
                            From bookings to payments, Arreglio gives your workshop everything it needs to grow,
                            stay organized & deliver 5-star service.
                        </p>
                        <Link
                            href="https://store.arreglio.com/register"
                            className="inline-block bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-3 rounded-md transition-colors"
                        >
                            Register Now
                        </Link>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-center lg:justify-end relative col-span-12 lg:col-span-5 mt-8 lg:mt-0"
                    >
                        {/* Rotating Gears */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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

                        <div className="relative transform rotate-6 py-12">
                            <div className="w-72 sm:w-75 h-[530px] bg-white rounded-[3rem] p-3 shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-b from-[#3498DB] to-[#2980B9] rounded-[2.5rem] relative overflow-hidden">
                                    {/* Phone content */}
                                    <div className="p-4 sm:p-6 text-white">
                                        <div className="text-center mb-6 sm:mb-8">
                                            <h3 className="text-primary font-bold text-lg sm:text-xl mb-2">arreglio</h3>
                                            <h2 className="text-xl sm:text-2xl font-bold mb-2">Bike</h2>
                                            <p className="text-gray-300 text-xs sm:text-sm">Workshop App</p>
                                        </div>

                                        <div className="bg-white rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                                            <p className="text-xs sm:text-sm mb-2 sm:mb-3">What are you looking for?</p>
                                            <div className="flex gap-2">
                                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                                <span className="w-8 h-2 bg-gray-400 rounded-full"></span>
                                            </div>
                                        </div>

                                        <button className="w-full bg-secondary hover:bg-secondary-light text-white py-2 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base">
                                            Book Now
                                        </button>

                                        <div className="mt-4 sm:mt-6 text-center">
                                            <div className="flex justify-center gap-2 mb-2 sm:mb-3">
                                                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
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