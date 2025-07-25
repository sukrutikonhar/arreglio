import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
    title: string;
    breadcrumbs: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => (
    <div className="bg-primary pb-8 pt-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">{title}</h1>
            <div className="text-gray-200 text-sm flex items-center gap-1">
                <Link href="/" className="hover:underline hover:text-secondary text-white font-normal" aria-label="Go to homepage">Home</Link>
                <span className="mx-1">-</span>
                {breadcrumbs}
            </div>
        </div>
        {/* Decorative bar */}
        <div className="mt-8 h-2 w-full bg-gradient-to-r from-[#253041] via-[#1e2227] via-30% via-[#1e2227] to-[#253041] flex items-center">
            <div className="h-2 w-16 bg-[#253041] mr-2" />
            <div className="h-2 w-8 bg-[#1e2227] mr-2" />
            <div className="h-2 w-8 bg-[#2ecc71] mr-2" />
            <div className="h-2 w-8 bg-[#1e2227]" />
        </div>
    </div>
);

export default PageHeader; 