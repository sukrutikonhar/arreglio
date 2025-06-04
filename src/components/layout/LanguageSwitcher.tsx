'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const locales = [
    { code: 'en', label: 'EN', flag: '/images/flags/gb.svg' },
    { code: 'es', label: 'ES', flag: '/images/flags/es.svg' },
    { code: 'fr', label: 'FR', flag: '/images/flags/fr.svg' },
    { code: 'sv', label: 'SV', flag: '/images/flags/se.svg' }
] as const;

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const currentLocale = useLocale();
    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentLanguage = locales.find(l => l.code === currentLocale) || locales[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLocaleChange = (newLocale: string) => {
        const pathWithoutLocale = pathname?.replace(`/${currentLocale}`, '') || '';
        const newPath = `/${newLocale}${pathWithoutLocale}`;
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
                <Image
                    src={currentLanguage.flag}
                    alt={currentLanguage.code}
                    width={20}
                    height={20}
                    className="rounded-sm"
                />
                <span className="text-sm font-medium text-black">{currentLanguage.label}</span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    {locales.map((locale) => (
                        <button
                            key={locale.code}
                            onClick={() => handleLocaleChange(locale.code)}
                            className={`w-full flex items-center px-4 py-2 space-x-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${currentLocale === locale.code ? 'bg-gray-50 dark:bg-gray-700' : ''
                                }`}
                        >
                            <Image
                                src={locale.flag}
                                alt={locale.code}
                                width={20}
                                height={20}
                                className="rounded-sm"
                            />
                            <span className="font-medium text-black dark:text-white">{locale.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
} 