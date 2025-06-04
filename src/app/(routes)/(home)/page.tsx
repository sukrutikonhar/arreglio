import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import { WithContext, Organization } from 'schema-dts'

export const metadata: Metadata = {
    title: 'Arreglio - Fixing Repairs for Everyone',
    description: 'Connecting customers and workshops through a smart platform built on trust and simplicity.',
}

const jsonLd: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arreglio',
    description: 'Connecting customers and workshops through a smart platform built on trust and simplicity.',
    url: 'https://arreglio.com',
    logo: 'https://arreglio.com/logo.png',
    sameAs: [
        'https://twitter.com/arreglio',
        'https://facebook.com/arreglio',
        'https://linkedin.com/company/arreglio'
    ]
}

export default function HomePage() {
    const t = useTranslations('Home')

    return (
        <>
            <NextSeo
                title="Arreglio - Fixing Repairs for Everyone"
                description="Connecting customers and workshops through a smart platform built on trust and simplicity."
                canonical="https://arreglio.com"
                openGraph={{
                    url: 'https://arreglio.com',
                    title: 'Arreglio - Fixing Repairs for Everyone',
                    description: 'Connecting customers and workshops through a smart platform built on trust and simplicity.',
                    images: [
                        {
                            url: 'https://arreglio.com/og-image.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Arreglio',
                        },
                    ],
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <h1 className="text-4xl font-bold">{t('title')}</h1>
                    <p className="mt-4 text-xl">{t('subtitle')}</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold">{t('forCustomers')}</h2>
                            <p className="mt-2">{t('customerDescription')}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">{t('forWorkshops')}</h2>
                            <p className="mt-2">{t('workshopDescription')}</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-center">{t('features')}</h2>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Features will be added here */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
} 