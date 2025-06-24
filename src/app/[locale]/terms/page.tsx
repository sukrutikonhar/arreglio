import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions - Arreglio',
    description: "Review the terms and conditions for using Arreglio's website, services, and marketplace. Understand your rights and responsibilities as a user.",
    keywords: ['terms and conditions', 'user agreement', 'arreglio', 'service terms', 'marketplace terms'],
    openGraph: {
        title: 'Terms & Conditions - Arreglio',
        description: "Review the terms and conditions for using Arreglio's website, services, and marketplace. Understand your rights and responsibilities as a user.",
        type: 'website',
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Terms & Conditions"
                breadcrumbs={<span>Terms of Service</span>}
            />
            <section className="bg-white py-16">
                <div className="container px-6 md:px-10 mx-auto">
                    <p className="mb-4 text-gray-700">Last updated: March 13, 2025</p>
                    <p className="mb-8">Welcome to arreglio.com ("the Company", "we", "our" or "us"). These terms and conditions ("Terms") govern your use of our website, services, and marketplace. By using our platform, you agree to comply with these terms.</p>
                    <ol className="list-decimal pl-6 space-y-6 text-gray-700">
                        <li><b>Overview of Services:</b> We offer bicycle repair and maintenance services where customers can place an order for repair, and our team will fix the bikes. After service, the bike is delivered back to the customer by a driver. We also offer a marketplace where users can purchase bikes, accessories, and related products.</li>
                        <li><b>User Accounts:</b> To use our services, you may need to create an account. You must provide accurate and complete information. You are responsible for keeping your login credentials confidential.</li>
                        <li><b>Orders and Payments:</b> All services and product purchases must be made through our website. Payment must be completed before the order is processed. We accept payments via Stripe, Bambora, and cash in-store. Prices may change without prior notice.</li>
                        <li><b>Bicycle Repair Services:</b> Customers must provide accurate details about their bikes and the requested services. We are not responsible for pre-existing damages not reported before service. Repairs are completed within the estimated timeframe, but delays may occur due to unforeseen circumstances.</li>
                        <li><b>Delivery and Pickup:</b> Customers must ensure the bike is available for pickup at the agreed time. Once the repair is complete, the bike is delivered back to the customer. Any failed delivery attempts due to customer unavailability may incur extra charges.</li>
                        <li><b>Marketplace Purchases:</b> Product offerings and prices may change. We do not guarantee that all listed products are always in stock. Returns and refunds are governed by our Return Policy.</li>
                        <li><b>Cancellations and Refunds:</b> Service orders can be canceled before the repair process begins. Marketplace purchases can be canceled before they are shipped. Refunds are processed according to our Refund Policy.</li>
                        <li><b>Limitation of Liability and Disclaimers:</b> We are not liable for any indirect or consequential damages resulting from our services. We handle bikes with the utmost care but are not responsible for damages caused by third parties (e.g., during transport). Our marketplace products are sold as-is, and warranties (if any) are provided by the manufacturer.</li>
                        <li><b>Intellectual Property:</b> All content on our website, including logos, text, and images, is our intellectual property. You may not copy, distribute, or use our content without permission.</li>
                        <li><b>Privacy Policy:</b> By using our website, you agree to our Privacy Policy, which describes how we collect, use, and protect your data.</li>
                        <li><b>Governing Law and Dispute Resolution:</b> These terms are governed by the laws of the applicable countries. Any disputes shall be resolved through mediation or arbitration before legal action is taken.</li>
                        <li><b>Changes to These Terms:</b> We reserve the right to update these terms at any time. Continued use of our services after changes means you accept the new terms.</li>
                        <li><b>Contact Us:</b> For questions about these terms, please contact us at support@arreglio.com.</li>
                    </ol>
                </div>
            </section>
        </div>
    );
} 