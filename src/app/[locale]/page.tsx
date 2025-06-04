'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from '@/components/home/HeroSection';
import PlatformSection from '@/components/home/PlatformSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import LaunchSection from '@/components/home/LaunchSection';
import SwedenSection from '@/components/home/SwedenSection';
import CTAStatsSection from '@/components/home/CTAStatsSection';
import StorySection from '@/components/home/StorySection';
import FAQSection from '@/components/home/FAQSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <PlatformSection />
            <FeaturesSection />
            <CTAStatsSection />
            <LaunchSection />
            <StorySection />
            <FAQSection />
        </>
    );
} 