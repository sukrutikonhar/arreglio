'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBell, FaLock } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const userTypes = [
    {
        title: 'Solo mechanic',
        image: '/images/workshop/solo-mechanic.jpg',
        alt: 'Solo mechanic working on a vehicle',
    },
    {
        title: 'Small shop owner with a team',
        image: '/images/workshop/small-shop.jpg',
        alt: 'Small workshop team working together',
    },
    {
        title: 'Multi-location workshop chain',
        image: '/images/workshop/multi-location.jpg',
        alt: 'Multiple workshop locations',
    },
];

type Feature = {
    icon: IconType;
    title: string;
    description: string;
    bgColor: string;
};

const features: Feature[] = [
    {
        icon: FaCalendarAlt,
        title: 'Take Online Bookings 24/7',
        description: 'Let customers book anytime, no calls needed.',
        bgColor: 'bg-green-100',
    },
    {
        icon: FaBell,
        title: 'Send Auto Updates',
        description: 'SMS and email notifications sent for you.',
        bgColor: 'bg-green-50',
    },
    {
        icon: FaLock,
        title: 'Get Paid Securely',
        description: 'Safe payments through all modes into your account',
        bgColor: 'bg-green-100',
    },
];

export default function RightFitAndFeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        Arreglio is the Right Fit For…
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Whether you're a solo mechanic, a small shop owner, or run a multi-location chain, Arreglio gives you the tools to manage bookings, talk to customers, take payments, and grow—all from your phone or computer.
                    </p>
                </motion.div>

                {/* User Types Row */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                    {userTypes.map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="text-center"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-green-100">
                                <Image
                                    src={type.image}
                                    alt={type.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {type.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex justify-center mb-16">
                    <div className="h-1 w-32 bg-gradient-to-r from-green-200 via-green-400 to-green-200 rounded-full" />
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`${feature.bgColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center`}
                            >
                                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-white shadow">
                                    {React.createElement(Icon as any, { className: 'text-green-500 text-2xl' })}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 