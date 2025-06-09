'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

interface SocialLink {
    icon: any;
    href: string;
}

export default function Footer() {
    const t = useTranslations('Navigation');
    const [email, setEmail] = useState('');

    // Create icon components to avoid TypeScript issues
    const MapIcon = FaMapMarkerAlt as any;
    const PhoneIcon = FaPhoneAlt as any;
    const EmailIcon = FaEnvelope as any;
    const ArrowIcon = FaArrowRight as any;

    const quickLinks = [
        { key: 'features', href: '/features' },
        { key: 'howItWorks', href: '/how-it-works' },
        { key: 'forWorkshops', href: '/for-workshops' },
        { key: 'forCustomers', href: '/for-customers' },
        { key: 'pricing', href: '/pricing' },
        { key: 'freeTrial', href: '/free-trial' },
    ];

    const socialLinks: SocialLink[] = [
        { icon: FaFacebookF, href: 'https://www.facebook.com/share/166YDFvCxf/?mibextid=wwXIfr' },
        { icon: FaInstagram, href: 'https://www.instagram.com/arreglio/' },
        { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/arreglio/' },
        { icon: FaXTwitter, href: 'https://x.com/arreglio' },
    ];

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
    };

    return (
        <footer className="bg-primary text-[#cacaca] py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Company Description */}
                    <div className="col-span-1 md:col-span-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="./images/logos/logo.svg"
                                alt="Arreglio Logo"
                                width={150}
                                height={40}
                            />
                        </Link>
                        <p className="mt-6 leading-relaxed text-[#cacaca]">
                            Arreglio is the all-in-one platform that helps repair shops manage bookings, talk to customers, and grow without the chaos. Whether you are fixing bikes, tools or cars, Arreglio gives you the tools to work smarter.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#cacaca] text-white hover:bg-white hover:border-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="group-hover:text-primary transition-colors duration-300">
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-semibold mb-6 text-white">{t('quickLinks')}</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href={link.href}
                                        className="text-[#cacaca] hover:text-white transition-colors"
                                    >
                                        {t(link.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-1 md:col-span-3">
                        <h3 className="text-lg font-semibold mb-6 text-white">{t('contact')}</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapIcon className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
                                <div className="text-[#cacaca]">
                                    <p className="text-[#cacaca]">Gårdsvägen 8,</p>
                                    <p className="text-[#cacaca]">169 70, Solna, Sweden</p>
                                    <p className="mt-2 text-[#cacaca]">Org.no - 559299-6598</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <PhoneIcon className="w-5 h-5 flex-shrink-0 text-white" />
                                <a href="tel:+46720131476" className="text-[#cacaca] hover:text-white transition-colors">
                                    +46 72 013 14 76
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <EmailIcon className="w-5 h-5 flex-shrink-0 text-white" />
                                <a href="mailto:support@arreglio.com" className="text-[#cacaca] hover:text-white transition-colors">
                                    support@arreglio.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-3">
                        <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
                        <p className="mb-4 text-[#cacaca]">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email id"
                                    className="w-full px-4 py-3 bg-white/10 rounded-md text-white placeholder-[#cacaca] focus:outline-none focus:ring-2 focus:ring-white/20"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-secondary hover:bg-secondary-light p-2 rounded-md transition-colors"
                                >
                                    <ArrowIcon className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-sm text-[#cacaca]">We don't spam. Unsubscribe any time.</p>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-[#cacaca]">© {new Date().getFullYear()} Arreglio. {t('allRightsReserved')}</p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <Link href="/privacy-policy" className="text-[#cacaca] hover:text-white transition-colors">
                                {t('privacy')}
                            </Link>
                            <Link href="/terms" className="text-[#cacaca] hover:text-white transition-colors">
                                {t('terms')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}