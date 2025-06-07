import React from 'react'
import { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Script from 'next/script';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-outfit',
})

export const metadata: Metadata = {
    title: {
        template: '%s | Arreglio',
        default: 'Arreglio - Fixing Repairs for Everyone',
    },
    description: 'Connecting customers and workshops through a smart platform built on trust and simplicity.',
    keywords: ['repair shop', 'workshop management', 'repair booking', 'digital platform'],
    authors: [{ name: 'Arreglio' }],
    creator: 'Arreglio',
    publisher: 'Arreglio',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params?: { locale?: string }
}) {
    return (
        <html lang={params?.locale || 'en'} className={`${outfit.variable} font-sans`}>
            <head>
                {/* Google Tag Manager */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    `}
                </Script>
            </head>
            <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white dark:bg-gray-900 font-sans">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {children}
            </body>
        </html>
    )
}