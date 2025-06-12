import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PageHeader from '@/components/common/PageHeader';

// Create icon components to avoid TypeScript issues
const PhoneIcon = FaPhoneAlt as any;
const EmailIcon = FaEnvelope as any;
const MapIcon = FaMapMarkerAlt as any;

const contactMethods = [
    {
        icon: PhoneIcon,
        title: 'Have any question?',
        value: '+46-720131476',
    },
    {
        icon: EmailIcon,
        title: 'Write email',
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
                breadcrumbs={<span>Home <span className="mx-1">-</span> Contact us</span>}
            />
            {/* Main Content */}
            <div className="container">
                <div className="max-w-6xl mx-auto mx-auto py-12 grid md:grid-cols-2 gap-12 items-start">
                    {/* Left: Contact Form */}
                    <div className="bg-[#f8fafd] p-8 rounded shadow-sm w-full">
                        <div className="text-xs text-gray-500 font-semibold mb-2 tracking-widest">CONTACT OUR EXPERTS</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Get in Touch with Us</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name*" className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] bg-white" />
                            <input type="email" placeholder="Email Address*" className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] bg-white" />
                            <input type="text" placeholder="Enter Subject*" className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] bg-white" />
                            <textarea placeholder="Message here" rows={4} className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] bg-white resize-none" />
                            <div>
                                <div className="text-sm font-semibold mb-1">How Can We Help?</div>
                                <div className="flex gap-4 text-xs text-gray-700">
                                    <label className="flex items-center gap-1">
                                        <input type="checkbox" className="accent-[#2ecc71]" /> Bike
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="checkbox" className="accent-[#2ecc71]" /> Garden
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="checkbox" className="accent-[#2ecc71]" /> Store
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="mt-2 bg-[#2ecc71] text-white font-semibold px-8 py-2 rounded shadow hover:bg-[#27ae60] transition">Send Query</button>
                        </form>
                    </div>

                    {/* Right: Info & Cards */}
                    <div className="flex flex-col gap-8">
                        <div className="text-gray-600 mb-2">
                            We’d love to hear from you! Whether you have questions about our services, need support, or want to explore collaboration opportunities, our team is here to help. Reach out to us via email, phone, or our online contact form, and we’ll respond promptly to assist you. Let’s work together to transform the repair and service experience for you and your business!                        </div>
                        <div className="flex flex-col gap-6">
                            {contactMethods.map((method, idx) => {
                                const Icon = method.icon;
                                return (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="bg-[#2ecc71] rounded p-4 flex items-center justify-center">
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-[#253041]">{method.title}</div>
                                            <div className="text-gray-600 text-sm">{method.value}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}