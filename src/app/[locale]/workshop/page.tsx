import React from 'react';
import WorkshopHero from '@/components/workshop/WorkshopHero';
import RightFitSection from '@/components/workshop/RightFitSection';
import FeaturesGrid from '@/components/workshop/FeaturesGrid';
import PlatformBenefits from '@/components/workshop/PlatformBenefits';
import GrowthSection from '@/components/workshop/GrowthSection';
import GetStartedSection from '@/components/workshop/GetStartedSection';
import FAQSection from '@/components/home/FAQSection';
import RightFitAndFeaturesSection from '@/components/workshop/RightFitAndFeaturesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'For Workshops',
    description: 'Transform your workshop with Arreglio\'s digital platform. Streamline operations, grow your business, and delight customers with our comprehensive workshop management solution.',
    keywords: ['workshop management', 'repair shop software', 'workshop platform', 'digital transformation', 'workshop growth'],
    openGraph: {
        title: 'Arreglio for Workshops - Transform Your Repair Business',
        description: 'Streamline operations and grow your workshop with our comprehensive digital platform.',
        type: 'website',
    },
};

export default function WorkshopPage() {
    return (
        <div className="min-h-screen">
            <WorkshopHero />
            <RightFitAndFeaturesSection />
            <PlatformBenefits />
            <GrowthSection />
            <GetStartedSection />
            <FAQSection />
        </div>
    );
} 