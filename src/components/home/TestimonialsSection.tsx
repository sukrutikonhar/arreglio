'use client';

import React from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Arreglio has transformed how we manage our bike repair shop. The booking system is seamless, and customers love the transparency.",
            author: "Maria Andersson",
            role: "Owner, Cykel Express",
            image: "/images/testimonials/maria.jpg"
        },
        {
            quote: "Since implementing Arreglio, we've seen a 40% increase in bookings and significantly reduced no-shows. It's a game-changer.",
            author: "Johan Nilsson",
            role: "Manager, Tools & Fix",
            image: "/images/testimonials/johan.jpg"
        },
        {
            quote: "The customer communication features are fantastic. Our clients appreciate the real-time updates and easy payment process.",
            author: "Anna Lindström",
            role: "Owner, Auto Care Stockholm",
            image: "/images/testimonials/anna.jpg"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Join hundreds of workshops already growing their business with Arreglio
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <svg
                                    className="w-10 h-10 text-secondary opacity-20"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                                </svg>
                            </div>

                            {/* Testimonial Content */}
                            <blockquote className="mb-8">
                                <p className="text-gray-600 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center space-x-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500 mb-6">TRUSTED BY LEADING WORKSHOPS ACROSS SWEDEN</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                        {/* Add partner/client logos here */}
                        {[1, 2, 3, 4, 5].map((index) => (
                            <Image
                                key={index}
                                src={`/images/partners/logo-${index}.svg`}
                                alt="Partner logo"
                                width={120}
                                height={40}
                                className="grayscale"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 