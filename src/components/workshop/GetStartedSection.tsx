'use client';

import React from 'react';

const features = [
    {
        title: 'Free Setup & Onboarding',
        description: 'We help you get started quickly'
    },
    {
        title: '2 Months Free Access',
        description: 'Try all features risk-free'
    },
    {
        title: 'Priority Listing in your Area',
        description: 'Get discovered by more customers'
    }
];

export default function GetStartedSection() {
    return (
        <section className="pt-[20rem] md:pt-60 pb-40 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Image with background shape */}
                <div className="relative w-full md:w-1/2 flex justify-center">
                    {/* Large rounded rectangle in secondary-light */}
                    <div className="absolute top-8 left-8 w-72 h-72 bg-secondary-light rounded-3xl z-0"></div>
                    {/* Outlined rounded rectangle in secondary, slightly offset */}
                    <div className="absolute top-16 left-16 w-72 h-72 border-2 border-secondary rounded-3xl z-0"></div>
                    {/* Main image */}
                    <img
                        src="/images/hero/story.jpg"
                        alt="Get Started"
                        className="relative w-72 h-72 object-cover rounded-full shadow-lg z-10"
                    />
                    {/* Decorative dot in secondary-dark */}
                    <div className="absolute right-0 bottom-0 w-8 h-8 bg-secondary-dark rounded-full"></div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 pt-10 md:pt-0">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        Get Your Workshop <span className="text-secondary">Online</span> Today
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {features.map((feature, idx) => (
                            <div key={feature.title} className="flex items-start gap-3">
                                <span className="mt-1 text-secondary">
                                    {/* Use a check or star icon */}
                                    <svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="10" /></svg>
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a
                        href="/get-started"
                        className="inline-block border-2 border-secondary text-secondary font-semibold px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
} 