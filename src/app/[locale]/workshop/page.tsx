import React from 'react';
import WorkshopHero from '@/components/workshop/WorkshopHero';
import RightFitSection from '@/components/workshop/RightFitSection';
import FeaturesGrid from '@/components/workshop/FeaturesGrid';
import PlatformBenefits from '@/components/workshop/PlatformBenefits';
import GrowthSection from '@/components/workshop/GrowthSection';
import GetStartedSection from '@/components/workshop/GetStartedSection';
import FAQSection from '@/components/home/FAQSection';
import RightFitAndFeaturesSection from '@/components/workshop/RightFitAndFeaturesSection';

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