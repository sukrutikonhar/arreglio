'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PlatformSection from '@/components/home/PlatformSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTAStatsSection from '@/components/home/CTAStatsSection';
import LaunchSection from '@/components/home/LaunchSection';
import StorySection from '@/components/home/StorySection';
import FAQSection from '@/components/home/FAQSection';

type Props = {
    params: {
        locale: string;
    };
};

export default function HomePage({ params: { locale } }: Props) {
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