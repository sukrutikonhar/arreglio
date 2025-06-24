'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { LuArrowUp } from 'react-icons/lu';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setVisible(scrollTop > 200);
            setProgress(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ width: 56, height: 56 }}
        >
            <span className="relative flex items-center justify-center w-full h-full">
                <svg width="56" height="56" viewBox="0 0 56 56" className="absolute top-0 left-0">
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                    />
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="none"
                        stroke="#2ecc71"
                        strokeWidth="2"
                        strokeDasharray={2 * Math.PI * 24}
                        strokeDashoffset={2 * Math.PI * 24 * (1 - progress / 100)}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.2s' }}
                    />
                </svg>
                <LuArrowUp className="text-secondary text-xl relative z-10" />
            </span>
        </button>
    );
};

export default ScrollToTop; 