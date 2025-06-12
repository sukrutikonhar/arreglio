'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const stats = [
    { value: 35, suffix: '%', label: 'More New Customers' },
    { value: 25, suffix: '%', label: 'New Business' },
    { value: -50, suffix: '%', label: 'Admin Time' },
    { value: 100, suffix: '%', label: 'Boost in Online Presence' }
];

const testimonial = {
    stars: 5,
    text: '“I used to write everything in a notebook. Now I track it all on my phone and get more jobs every week. The app has completely transformed how I manage my workshop.”',
    name: 'Asha',
    role: 'Bike Mechanic, Malmö'
};

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (start) {
            const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
            return controls.stop;
        }
    }, [start, value, count]); // ✅ count added


    return (
        <span className="text-3xl md:text-5xl font-medium text-secondary mb-3">
            <motion.span>{rounded}</motion.span>
            <span className="text-lg md:text-2xl align-top">{suffix}</span>
        </span>
    );
}

export default function GrowthSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section ref={sectionRef} className="relative bg-primary pb-40 pt-16">
            <div className="container px-4">
                <div className="grid grid-cols-12 gap-0 flex items-center stats-container">
                    {/* Left: Label and Title */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col justify-center mb-8 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Workshops Using <span className="text-secondary">Arreglio</span> See Real Growth
                        </h2>
                    </div>

                    {/* Right: Stats */}
                    <div className="col-span-12 lg:col-span-8 col-start-1 lg:col-start-5 flex flex-col justify-end relative">
                        <div className="w-full flex flex-row justify-between items-center gap-4 md:gap-8 relative z-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex-1 flex flex-col items-center min-w-[100px]">
                                    <Counter value={stat.value} suffix={stat.suffix} start={isInView} />
                                    <span className=" text-[#cacaca] text-md text-center">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                <div className="flex justify-center w-full absolute left-1/2 -translate-x-1/2 -bottom-32 z-20 testimonial-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full max-w-2xl"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl px-8 py-8 text-center">
                            <div className="flex items-center justify-center mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                            <div className="font-bold text-gray-900">{testimonial.name}</div>
                            <div className="text-gray-500 text-sm">{testimonial.role}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
