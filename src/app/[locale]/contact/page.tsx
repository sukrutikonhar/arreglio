import React from 'react';
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2';
import PageHeader from '@/components/common/PageHeader';
import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Arreglio. Contact our team for support, questions, or collaboration opportunities. We\'re here to help transform your repair experience.',
    keywords: ['contact', 'support', 'help', 'customer service', 'repair platform'],
    openGraph: {
        title: 'Contact Arreglio - Get in Touch',
        description: 'Reach out to our team for support, questions, or collaboration opportunities.',
        type: 'website',
    },
};

// Create icon components to avoid TypeScript issues
const PhoneIcon = HiOutlinePhone as any;
const EmailIcon = HiOutlineEnvelope as any;
const MapIcon = HiOutlineMapPin as any;

const contactMethods = [
    {
        icon: PhoneIcon,
        title: 'Have any question?',
        value: '+46-720131476',
    },
    {
        icon: EmailIcon,
        title: 'Email us',
        value: 'support@arreglio.com',
    },
    {
        icon: MapIcon,
        title: 'Visit anytime',
        value: 'Gårdsvägen 8, 169 70 Solna, Sweden',
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Contact us"
                breadcrumbs={<span>Contact us</span>}
            />
            {/* Main Content */}
            <section className="bg-white py-16">
                <div className="container px-6 md:px-10 max-w-7xl mx-auto">
                    {/* Section Top: Bar + Title/Description with Divider */}
                    <div className="mb-12">
                        {/* Top Bar */}
                        <div className="h-1 w-16 bg-primary mb-4"></div>

                        {/* Title and Description Row */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start relative">
                            {/* Left: Heading */}
                            <div className="md:pr-6">
                                <div className="text-xs text-gray-500 font-semibold tracking-widest mb-2">CONTACT OUR EXPERTS</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">Get in Touch with Us</h2>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300 translate-x-[-50%]" />

                            {/* Right: Paragraph */}
                            <div className="md:pl-6 text-gray-600">
                                <p>
                                    We'd love to hear from you! Whether you have questions about our services, need support, or want to explore collaboration opportunities, our team is here to help. Reach out to us via email, phone, or our online contact form, and we'll respond promptly to assist you. Let's work together to transform the repair and service experience for you and your business!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form and Info */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Contact Form */}
                        <ContactForm />

                        {/* Right: Contact Info */}
                        <div className="flex flex-col gap-6">
                            {contactMethods.map(({ icon: Icon, title, value }, idx) => {
                                let href: string | undefined;

                                if (title.toLowerCase().includes('email')) {
                                    href = `mailto:${value}`;
                                } else if (title.toLowerCase().includes('question')) {
                                    href = `tel:${value.replace(/[^+\d]/g, '')}`;
                                } else {
                                    href = undefined;
                                }

                                return (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="bg-[#2ecc71] rounded p-4 flex items-center justify-center min-w-[60px] h-[60px]">
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xl text-[#707070]">{title}</div>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    className="text-[#707070] text-md hover:text-primary transition"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <div className="text-[#707070] text-md">{value}</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}