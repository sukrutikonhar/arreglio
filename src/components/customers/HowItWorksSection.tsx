'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    MagnifyingGlassIcon,
    MapPinIcon,
    CalendarIcon,
    DevicePhoneMobileIcon,
    CreditCardIcon,
    WrenchScrewdriverIcon,
    ShieldCheckIcon,
    ClockIcon,
} from '@heroicons/react/24/outline';

// Step definition
interface Step {
    number: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    popularServices?: string[];
}

// Feature definition
interface Feature {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
}

const steps: Step[] = [
    {
        number: '1',
        title: 'Find Your Service',
        description:
            "Enter your location and choose the type of repair you need, from bikes to power tools, we've got it covered.",
        icon: MagnifyingGlassIcon,
        popularServices: [
            'Bike Repairs',
            'Electronics',
            'Garden Tools',
            'Power Tools',
            'And more'
        ]
    },
    {
        number: '2',
        title: 'Choose Your Workshop',
        description:
            'Browse top-rated local repair shops with real customer reviews, distance, and availability. Pick one that fits your schedule.',
        icon: MapPinIcon
    },
    {
        number: '3',
        title: 'Book in Seconds',
        description:
            'Select a time that works for you. Book your repair in just a few taps, no hassle or long forms.',
        icon: CalendarIcon
    },
    {
        number: '4',
        title: 'Track the Progress',
        description:
            "Get real-time updates on your repair from start to finish. You'll always know what's happening, no chasing, no guessing.",
        icon: DevicePhoneMobileIcon
    },
    {
        number: '5',
        title: 'Pay Securely',
        description:
            'Once your item is ready, pay securely online. No need to carry cash or worry about awkward handovers.',
        icon: CreditCardIcon
    }
];

const features: Feature[] = [
    { icon: WrenchScrewdriverIcon, text: 'Local Repair Experts' },
    { icon: ShieldCheckIcon, text: 'Transparent Pricing' },
    { icon: ClockIcon, text: 'Real‑Time Updates' },
    { icon: CreditCardIcon, text: 'Secure, Seamless Payments' }
];

export default function HowItWorksSection() {
    return (
        <section className="relative bg-green-50">
            {/* Overlapping Features Grid */}
            <div className="absolute inset-x-0 -top-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-20"
                    >
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-3">
                                    <div className="text-secondary text-3xl">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <span className="font-medium text-gray-700">{feature.text}</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* How It Works */}
            <div className="pt-[25rem] sm:pt-48 lg:pt-24 pb-20 container mx-auto px-4">
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-20 text-center">
                    With Arreglio, finding a trusted local repair shop is as simple as ordering takeout. No phone calls. No confusion. Just fast, clear, and reliable service, all in one place.
                </p>

                {/* Divider */}
                <div className="flex justify-center mb-16">
                    <div className="h-1 w-32 bg-gradient-to-r from-green-200 via-green-400 to-green-200 rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative z-10"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                        How It <span className="text-secondary">Works</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Getting your repairs done has never been easier. Follow these simple steps and you'll be back to doing what you love in no time.
                    </p>
                </motion.div>

                {/* Desktop Steps */}
                <div className="hidden md:block relative max-w-5xl mx-auto">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-secondary/20 -translate-x-1/2 z-0" />
                    <div className="flex flex-col gap-16 relative z-10">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isEven = idx % 2 === 1;
                            return (
                                <div key={idx} className="relative flex flex-col md:flex-row items-center">
                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2 md:pl-12' : 'md:pr-12'} flex flex-col items-start md:items-end`}>
                                        <div className={`flex flex-col mb-4 ${isEven ? 'md:justify-start md:items-start' : 'md:justify-end md:items-end'} w-full`}>
                                            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
                                                {step.number}
                                            </div>
                                            <h3 className="font-bold text-primary text-lg">{step.title}</h3>
                                        </div>
                                        <p className={`text-gray-600 mb-2 w-full ${isEven ? 'text-left' : 'text-right'}`}>{step.description}</p>
                                        {step.popularServices && (
                                            <div className={`mt-2 flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-end'}`}>
                                                {step.popularServices.map((service, i) => (
                                                    <span key={i} className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs">
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Icon */}
                                    <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-end' : 'justify-start'} mt-6 md:mt-0 relative`}>
                                        <div className={`flex flex-col items-center relative ${isEven ? 'me-20' : 'ms-20'}`}>
                                            <div className="w-20 h-20 bg-white border-4 border-secondary rounded-full flex items-center justify-center shadow-lg z-10">
                                                <Icon className="text-secondary h-10 w-10" />
                                            </div>
                                            <div
                                                className={`hidden md:block absolute top-1/2 w-20 h-1 bg-secondary/20 ${isEven ? 'left-full' : 'right-full'}`}
                                                style={{ transform: 'translateY(-50%)' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Steps */}
                <div className="block md:hidden space-y-10 max-w-xl mx-auto relative z-10">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex gap-4">
                                <div className="relative flex-shrink-0">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                        <Icon className="h-6 w-6 text-secondary" />
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-[23px] top-[48px] w-0 h-[calc(100%-12px)] border-l-2 border-dashed border-secondary/30" />
                                    )}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                                    <p className="text-gray-600">{step.description}</p>
                                    {step.popularServices && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {step.popularServices.map((service, i) => (
                                                <span key={i} className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}