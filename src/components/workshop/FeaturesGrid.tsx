'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Take Online Bookings 24/7',
        description: 'Let customers book anytime, no calls needed.',
        bgColor: 'bg-green-100'
    },
    {
        title: 'Send Auto Updates',
        description: 'SMS and email notifications sent for you.',
        bgColor: 'bg-green-50'
    },
    {
        title: 'Get Paid Securely',
        description: 'Safe payments through all modes into your account',
        bgColor: 'bg-green-100'
    }
];

export default function FeaturesGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`${feature.bgColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 