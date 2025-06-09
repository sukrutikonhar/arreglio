import React from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface LayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
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

export default async function RootLayout({ children, params: { locale } }: LayoutProps) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
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