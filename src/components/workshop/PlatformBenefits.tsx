'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
    'Online Booking & Calendar',
    'Job Cards & Customer History',
    'SMS/Email Reminders',
    'Secure Payments (Card, QR, Online)',
    'In-App Messaging',
    'Business Dashboard & Reports',
    'Online Storefront & Listings',
    'Marketing Tools (Promos, Loyalty)',
    'White-Label Options for Chains'
];

const mid = Math.ceil(benefits.length / 2);
const leftBenefits = benefits.slice(0, mid);
const rightBenefits = benefits.slice(mid);

export default function PlatformBenefits() {
    return (
        <section className="py-20 bg-background-dark-secondary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        One Platform.{" "}
                        <span className="text-primary">
                            Infinite Benefits.
                        </span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    {/* Left Points */}
                    <div className="flex flex-col gap-6 flex-1 items-end">
                        {leftBenefits.map((benefit, idx) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white shadow-lg rounded-xl px-6 py-3 w-64 text-right backdrop-blur-sm"
                            >
                                <span className="text-primary font-semibold">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Central Phone Image (using a dummy mockup image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto w-[220px] md:w-[320px] z-10 flex justify-center items-center"
                    >
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
                    </motion.div>

                    {/* Right Points */}
                    <div className="flex flex-col gap-6 flex-1 items-start">
                        {rightBenefits.map((benefit, idx) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white shadow-lg rounded-xl px-6 py-3 w-64 text-left backdrop-blur-sm"
                            >
                                <span className="text-primary font-semibold">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center mt-12 text-white font-semibold"
                >
                    ALL THIS AND MORE WITH ZERO TECH SKILLS
                </motion.div>
            </div>
        </section>
    );
} 