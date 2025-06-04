import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface Props {
    children: ReactNode
    params: { locale: string }
}

async function getMessages(locale: string) {
    try {
        const messages = {
            Navigation: (await import(`@/locales/${locale}/navigation.json`)).default,
            Home: (await import(`@/locales/${locale}/home.json`)).default
        };
        return messages;
    } catch (error) {
        notFound();
    }
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }, { locale: 'sv' }]
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    const messages = await getMessages(locale)

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </NextIntlClientProvider>
    )
} 