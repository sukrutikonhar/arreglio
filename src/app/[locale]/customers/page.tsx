import React from 'react';
import { Metadata } from 'next';
import CustomerHero from '@/components/customers/CustomerHero';
import HowItWorksSection from '@/components/customers/HowItWorksSection';
import TestimonialsSection from '@/components/customers/TestimonialsSection';
import ComparisonSection from '@/components/customers/ComparisonSection';
import CTAButtonSection from '@/components/customers/CTAButtonSection';

export const metadata: Metadata = {
    title: 'For Customers',
    description: 'Find trusted local repair shops with Arreglio. Book repairs instantly, get real-time updates, and pay securely. No phone calls, no hassle - just fast, reliable service.',
    keywords: ['repair booking', 'local repair shops', 'repair services', 'online booking', 'repair tracking'],
    openGraph: {
        title: 'Arreglio for Customers - Repairs Made Easy',
        description: 'Find and book trusted local repair shops instantly. Get real-time updates and pay securely.',
        type: 'website',
    },
};

export default function CustomersPage() {
    return (
        <div className="min-h-screen">
            <CustomerHero />
            <HowItWorksSection />
            <TestimonialsSection />
            <ComparisonSection />
            <CTAButtonSection />
        </div>
    );
} 