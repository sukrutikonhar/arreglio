import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Update the Props type to match Next.js expectations
interface LayoutProps {
    children: React.ReactNode
    params: {
        locale: string
    }
}

async function getMessages(locale: string) {
    try {
        return {
            Navigation: (await import(`@/locales/${locale}/navigation.json`)).default,
            Home: (await import(`@/locales/${locale}/home.json`)).default
        }
    } catch (error) {
        notFound()
    }
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }, { locale: 'sv' }]
}

// Change the component to use LayoutProps
export default function LocaleLayout({
    children,
    params: { locale }
}: LayoutProps) {
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider
                    locale={locale}
                    messages={getMessages(locale)}
                >
                    <Header />
                    <main className="flex-grow pt-16">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}