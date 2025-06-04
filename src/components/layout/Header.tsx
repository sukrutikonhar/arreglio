'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('Navigation');

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/images/logos/logo-dark.svg"
                                alt="Arreglio"
                                className="h-8 w-auto"
                                loading="eager"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <Navigation />
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
                        <LanguageSwitcher />
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors"
                        >
                            {t('contact')}
                        </Link>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex md:hidden items-center space-x-2 ml-auto">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-secondary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isMenuOpen && (
                <div className="md:hidden border-b border-gray-200">
                    <Navigation isMobile={true} onItemClick={() => setIsMenuOpen(false)} />
                    <div className="px-4 py-3">
                        <Link
                            href="/contact"
                            className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('contact')}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
} 