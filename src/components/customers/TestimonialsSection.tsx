'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "I booked a bike repair during lunch. It was ready the next day, and I got updates the whole time!",
            author: "Anders L.",
            location: "Stockholm",
            rating: 5
        },
        {
            quote: "I finally stopped calling around. Arreglio made it simple to find someone I could trust.",
            author: "Fatima R.",
            location: "Gothenburg",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                        What Customers Are <span className="text-secondary">Saying</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what real customers have to say about their Arreglio experience.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 relative overflow-hidden"
                            >
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full translate-y-12 -translate-x-12"></div>

                                {/* Quote Icon */}
                                <div className="relative z-10">
                                    <FaQuoteLeft className="text-secondary text-4xl mb-6 opacity-80" />


                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => {
                                            const StarIcon = FaStar as React.FC<{ className?: string }>;
                                            return <StarIcon key={i} className="text-secondary text-lg" />;
                                        })}
                                    </div>


                                    {/* Quote */}
                                    <blockquote className="text-lg leading-relaxed mb-6 relative z-10">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-white">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold">{testimonial.author}</p>
                                            <p className="text-gray-300 text-sm">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 