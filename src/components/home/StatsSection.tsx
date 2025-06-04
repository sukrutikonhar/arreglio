'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface StatItemProps {
    endValue: number;
    suffix: string;
    label: string;
    description: string;
    duration?: number;
}

const StatItem = ({ endValue, suffix, label, description, duration = 2 }: StatItemProps) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(countRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (duration * 1000), 1);
                const currentCount = Math.floor(progress * endValue);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };

            updateCount();
            controls.start({ opacity: 1, y: 0 });
        }
    }, [isInView, endValue, duration, controls]);

    return (
        <motion.div
            ref={countRef}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="text-[4rem] font-bold text-secondary mb-2 leading-none">
                {count}{suffix}
            </div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 text-center">
                {label}
            </h3>
            <p className="text-gray-600 text-sm text-center">
                {description}
            </p>
        </motion.div>
    );
};

export default function StatsSection() {
    const stats = [
        {
            endValue: 100,
            suffix: '+',
            label: 'WORKSHOPS ONBOARDED',
            description: 'From solo mechanics to busy multi-location chains, workshops across Sweden and beyond are using Arreglio to bring order to their operations.',
            duration: 2
        },
        {
            endValue: 5,
            suffix: '★',
            label: 'RATINGS',
            description: 'Rated 5 stars by workshops that made the switch to Arreglio. Workshop owners love how simple, fast, and reliable Arreglio is.',
            duration: 1
        },
        {
            endValue: 45,
            suffix: '%',
            label: 'MORE BUSINESS REPORTED',
            description: 'Workshops using Arreglio report faster bookings, more repeat customers, and fewer no-shows without working longer hours.',
            duration: 1.5
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-secondary/10 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Trusted by Worshops That<br />Just Want to{' '}
                        <span className="text-secondary">Work Smarter</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Join thousands of repair shops and customers who trust Arreglio to streamline their repair experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            endValue={stat.endValue}
                            suffix={stat.suffix}
                            label={stat.label}
                            description={stat.description}
                            duration={stat.duration}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 