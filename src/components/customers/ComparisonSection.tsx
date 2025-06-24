'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiThumbsDown, FiThumbsUp, FiCheckCircle, FiXCircle } from 'react-icons/fi';

export default function ComparisonSection() {
    const dos = [
        'Book instantly online, 24/7',
        'Get live status updates on your repair',
        'Receive transparent, upfront quotes',
        'Pay securely with one-click checkout',
        'Access a network of trusted professionals',
    ];

    const donts = [
        'Endless phone calls and waiting for callbacks',
        'No visibility on repair progress',
        'Hidden costs and surprise fees',
        'Inconvenient manual payment methods',
        'Uncertainty about mechanic quality',
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.2 + i * 0.1, duration: 0.4 },
        }),
    };

    return (
        <section className="py-24 bg-background-light-primary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight">
                        The <span className="text-secondary">Arreglio</span> Difference
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Leave the old hassles behind. See how booking repairs with Arreglio compares to traditional methods.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* DON'T Column */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl flex overflow-hidden border border-gray-200/50"
                    >
                        <div className="bg-gradient-to-b from-red-500 to-orange-400 text-white p-4 flex flex-col items-center justify-center w-24">
                            <FiThumbsDown size={32} className="mb-4" />
                            <span className="[writing-mode:vertical-rl] text-xl font-bold tracking-wider uppercase transform rotate-180">
                                DON'T
                            </span>
                        </div>
                        <div className="p-8 w-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">The Old Way</h3>
                            <ul className="space-y-4">
                                {donts.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        custom={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="flex items-start"
                                    >
                                        <FiXCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                                        <span className="text-gray-600">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* DO Column */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl flex overflow-hidden border border-gray-200/50"
                    >
                        <div className="bg-gradient-to-b from-secondary to-primary text-white p-4 flex flex-col items-center justify-center w-24">
                            <FiThumbsUp size={32} className="mb-4" />
                            <span className="[writing-mode:vertical-rl] text-xl font-bold tracking-wider uppercase transform rotate-180">
                                DO
                            </span>
                        </div>
                        <div className="p-8 w-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">The Arreglio Way</h3>
                            <ul className="space-y-4">
                                {dos.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        custom={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="flex items-start"
                                    >
                                        <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                                        <span className="text-gray-600">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 