import React from 'react';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/home/HeroSection'), { ssr: true });
const PlatformSection = dynamic(() => import('@/components/home/PlatformSection'), { ssr: true });
const FeaturesSection = dynamic(() => import('@/components/home/FeaturesSection'), { ssr: true });
const CTAStatsSection = dynamic(() => import('@/components/home/CTAStatsSection'), { ssr: true });
const LaunchSection = dynamic(() => import('@/components/home/LaunchSection'), { ssr: true });
const StorySection = dynamic(() => import('@/components/home/StorySection'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/home/FAQSection'), { ssr: true });

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