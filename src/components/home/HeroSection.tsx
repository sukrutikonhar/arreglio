'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const t = useTranslations('Home');
    const imageAnimDuration = 0.8;

    return (
        <section className="relative bg-primary min-h-[calc(100vh-4rem)] pt-16 lg:pt-0">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center min-h-[calc(100vh-4rem)]">
                    {/* Content */}
                    <div className="relative z-20 pt-8 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: imageAnimDuration + 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Fixing <span className="text-secondary">Repairs</span><br />
                                for Everyone
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: imageAnimDuration + 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <p className="text-xl text-[#cacaca] mb-8">
                                Connecting customers and workshops through<br />
                                a smart platform built on trust and simplicity.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: imageAnimDuration + 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" asChild>
                                <Link href="/workshop">{t('hero.primaryCTA')}</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="https://store.arreglio.com/register">{t('hero.secondaryCTA')}</Link>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative w-full py-8 lg:py-12 flex justify-center"
                        initial={{ opacity: 0, scale: 0.92, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: imageAnimDuration,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                            className="absolute top-18 right-1/3 w-10 h-10 opacity-40 hidden lg:block z-0"
                        >
                            <Image
                                src="/images/icons/gear-icon.png"
                                alt="Gear"
                                width={40}
                                height={40}
                                className="w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                            className="absolute bottom-1/4 left-20 w-12 h-12 opacity-30 hidden lg:block z-0"
                        >
                            <Image
                                src="/images/icons/gear-icon.png"
                                alt="Gear"
                                width={48}
                                height={48}
                                className="w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                            className="absolute top-1/3 left-8 w-10 h-10 opacity-50 hidden lg:block z-0"
                        >
                            <Image
                                src="/images/icons/gear-icon.png"
                                alt="Gear"
                                width={40}
                                height={40}
                                className="w-full h-auto"
                            />
                        </motion.div>


                        {/* Phone Mockup Image */}
                        <figure className="relative z-10 max-w-[500px] lg:mb-[-80px] xl:mb-[-100px]">
                            <Image
                                src="/images/home/phone-mock.png"
                                alt="Devices mockup"
                                width={500}
                                height={500}
                                className="w-full h-auto"
                                priority
                            />
                        </figure>
                    </motion.div>



                </div>
            </div>
        </section>
    );
} 