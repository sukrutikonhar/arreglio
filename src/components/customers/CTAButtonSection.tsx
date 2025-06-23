'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiZap, FiLock, FiStar } from 'react-icons/fi';

export default function CTAButtonSection() {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
                <div className="absolute top-16 left-16 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-16 right-16 w-56 h-56 bg-secondary/80 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/60 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto px-4 relative z-10 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="w-full backdrop-blur-lg text-center"
                >
                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-extrabold text-primary mb-4"
                    >
                        Built for Every <span className="text-secondary">Fix</span>, Big or Small
                    </motion.h2>
                    {/* Supporting Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
                    >
                        Whether it's a flat bike tire, a jammed drill, or a garden tool that just won't start, Arreglio connects you to local fixers who know what they're doing.
                    </motion.p>
                    {/* CTA Prompt */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-primary p-8 rounded-xl shadow-inner max-w-3xl mx-auto backdrop-blur-md"
                    >
                        <h4 className="text-secondary font-bold text-2xl mb-3 tracking-tight">
                            Ready to Book Instantly?
                        </h4>
                        <p className="text-[#cacaca] mb-10 text-base sm:text-lg">
                            It only takes a minute. Find a repair shop near you and get back to doing what you love.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/find-repair-shop"
                                className="inline-block bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-2 rounded-lg transition-all duration-300 border border-secondary transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Find a Repair Shop
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-transparent hover:bg-white text-secondary font-semibold px-8 py-2 rounded-lg transition-all duration-300 border border-secondary   hover:border-secondary/60 text-lg shadow"
                            >
                                Contact us
                            </Link>
                        </div>
                    </motion.div>


                    {/* Feature Highlights */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-6 grid md:grid-cols-3 gap-8"
                    >
                        <div className="text-center">
                            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiZap className="text-secondary" size={28} />
                            </div>
                            <h3 className="text-primary font-semibold mb-1">Book in Seconds</h3>
                            <p className="text-gray-600 text-sm">No long forms or phone calls needed</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiLock className="text-secondary" size={28} />
                            </div>
                            <h3 className="text-primary font-semibold mb-1">Secure &amp; Safe</h3>
                            <p className="text-gray-600 text-sm">Your data and payments are protected</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="text-secondary" size={28} />
                            </div>
                            <h3 className="text-primary font-semibold mb-1">Trusted Experts</h3>
                            <p className="text-gray-600 text-sm">Verified workshops with great reviews</p>
                        </div>
                    </motion.div> */}
                </motion.div>
            </div>
        </section>
    );
} 