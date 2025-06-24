import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Arreglio',
    description: 'Read how Arreglio collects, uses, and protects your personal information when you use our website and services.',
    keywords: ['privacy policy', 'data protection', 'personal information', 'arreglio', 'user privacy'],
    openGraph: {
        title: 'Privacy Policy - Arreglio',
        description: 'Read how Arreglio collects, uses, and protects your personal information when you use our website and services.',
        type: 'website',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Privacy Policy"
                breadcrumbs={<span>Home <span className="mx-1">-</span> Privacy Policy</span>}
            />
            <section className="bg-white py-16">
                <div className="container px-6 md:px-10 mx-auto">
                    <h2 className="text-2xl font-bold text-primary mb-8">Privacy Policy</h2>
                    <p className="mb-6">This privacy policy describes how arreglio.com collects, uses, and protects your information when you use our website and services. By using our platform, you agree to this policy.</p>
                    <p className="mb-6">We value your privacy and handle your personal data with the utmost care. Please read this policy to understand how we process your information.</p>
                    <ul className="list-disc pl-6 space-y-4 text-gray-700 mt-8">
                        <li><b>Information Collection:</b> We collect information you provide when creating an account, placing an order, or contacting us. This may include your name, contact details, and payment information.</li>
                        <li><b>Use of Information:</b> Your information is used to provide and improve our services, process orders, communicate with you, and ensure the security of our platform.</li>
                        <li><b>Data Sharing:</b> We do not sell your personal data. Information may be shared with trusted partners for payment processing, delivery, or legal compliance.</li>
                        <li><b>Cookies:</b> Our website uses cookies to enhance your experience and analyze site usage. You can manage cookie preferences in your browser settings.</li>
                        <li><b>Data Security:</b> We implement security measures to protect your data from unauthorized access, alteration, or disclosure.</li>
                        <li><b>Your Rights:</b> You have the right to access, correct, or delete your personal information. Contact us at support@arreglio.com for any requests.</li>
                        <li><b>Policy Updates:</b> We may update this policy from time to time. Continued use of our services after changes means you accept the updated policy.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
} 