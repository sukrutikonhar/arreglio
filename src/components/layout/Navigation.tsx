'use client';

import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'blog', href: '/blog' },
] as const;

interface NavigationProps {
    isMobile?: boolean;
    onItemClick?: () => void;
}

export default function Navigation({ isMobile, onItemClick }: NavigationProps) {
    const t = useTranslations('Navigation')
    const pathname = usePathname()

    if (isMobile) {
        return (
            <nav className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map(({ key, href }) => {
                    const isActive = pathname === href || pathname?.startsWith(`${href}/`);
                    return (
                        <Link
                            key={key}
                            href={href}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-secondary hover:bg-gray-50 ${isActive ? 'text-secondary bg-gray-50' : 'text-black'
                                }`}
                            onClick={onItemClick}
                        >
                            {t(key)}
                        </Link>
                    )
                })}
            </nav>
        )
    }

    return (
        <nav className="flex space-x-8">
            {navItems.map(({ key, href }) => {
                const isActive = pathname === href || pathname?.startsWith(`${href}/`);
                return (
                    <Link
                        key={key}
                        href={href}
                        className={`text-md font-normal transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-black'
                            }`}
                    >
                        {t(key)}
                    </Link>
                )
            })}
        </nav>
    )
} 