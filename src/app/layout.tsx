import React from 'react'
import { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXX');`,
                    }}
                />
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