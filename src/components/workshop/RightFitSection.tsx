'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const userTypes = [
    {
        title: 'Solo mechanic',
        image: '/images/workshop/solo-mechanic.jpg',
        alt: 'Solo mechanic working on a vehicle'
    },
    {
        title: 'Small shop owner with a team',
        image: '/images/workshop/small-shop.jpg',
        alt: 'Small workshop team working together'
    },
    {
        title: 'Multi-location workshop chain',
        image: '/images/workshop/multi-location.jpg',
        alt: 'Multiple workshop locations'
    }
];

export default function RightFitSection() {
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
                        Arreglio Is the Right Fit If You Are
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {userTypes.map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                                <Image
                                    src={type.image}
                                    alt={type.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {type.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center text-gray-600 mt-12 max-w-3xl mx-auto"
                >
                    Arreglio gives you the tools to manage bookings, talk to customers, take payments,
                    and grow - all from your phone or computer.
                </motion.p>
            </div>
        </section>
    );
} 