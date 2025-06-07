'use client';

import React from 'react';
import { FaSearch, FaCalendarCheck, FaClipboardList, FaCreditCard } from 'react-icons/fa';
import { MdSettings, MdAssignment, MdUpdate, MdPayment } from 'react-icons/md';

interface Step {
    icon: any;
    title: string;
    description: string;
}

const FeaturesSection = () => {
    const customerSteps: Step[] = [
        {
            icon: FaSearch,
            title: 'Find Service',
            description: 'Search for repair services in your area'
        },
        {
            icon: FaCalendarCheck,
            title: 'Book Service',
            description: 'Choose a time that works for you'
        },
        {
            icon: FaClipboardList,
            title: 'Track Progress',
            description: 'Get real-time updates on your repair'
        },
        {
            icon: FaCreditCard,
            title: 'Complete Payment',
            description: 'Pay securely through the platform'
        }
    ];

    const workshopSteps: Step[] = [
        {
            icon: MdSettings,
            title: 'Set Up',
            description: 'Quick setup of your repair system'
        },
        {
            icon: MdAssignment,
            title: 'Accept Jobs',
            description: 'Manage incoming repair requests'
        },
        {
            icon: MdUpdate,
            title: 'Update Status',
            description: 'Keep customers informed on progress'
        },
        {
            icon: MdPayment,
            title: 'Get Paid',
            description: 'Receive payments automatically'
        }
    ];

    return (
        <section className="bg-gray-100 pt-72 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mt-8 mb-16">
                        Repairs. <span className="text-secondary">As Simple As They Get.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Customer Process */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                            <div className="text-center md:text-left mb-8">
                                <h3 className="text-2xl font-semibold text-primary mb-4">
                                    Arreglio for{' '}
                                    <span className="relative inline-block">
                                        Customers
                                        <svg className="absolute -bottom-1 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                                            <path d="M0,3 C5,3 10,1 15,1 L85,1 C90,1 95,3 100,3" stroke="#2ECC71" strokeWidth="2" fill="none" />
                                        </svg>
                                    </span>
                                </h3>
                                <p className="text-lg text-gray-500">
                                    Customer Booking Process
                                </p>
                            </div>
                            <div className="space-y-10">
                                {customerSteps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                                    <IconComponent className="w-6 h-6" />
                                                </div>
                                                {index < customerSteps.length - 1 && (
                                                    <div className="absolute left-[23px] top-[48px] w-0 h-[calc(100%-12px)] border-l-2 border-dashed border-secondary/30" />
                                                )}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                                                <p className="text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Workshop Process */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                            <div className="text-center md:text-left mb-8">
                                <h3 className="text-2xl font-semibold text-primary mb-4">
                                    Arreglio for{' '}
                                    <span className="relative inline-block">
                                        Workshops
                                        <svg className="absolute -bottom-1 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                                            <path d="M0,3 C5,3 10,1 15,1 L85,1 C90,1 95,3 100,3" stroke="#2ECC71" strokeWidth="2" fill="none" />
                                        </svg>
                                    </span>
                                </h3>
                                <p className="text-lg text-gray-500">
                                    Shop Management Process
                                </p>
                            </div>
                            <div className="space-y-10">
                                {workshopSteps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                                    <IconComponent className="w-6 h-6" />
                                                </div>
                                                {index < workshopSteps.length - 1 && (
                                                    <div className="absolute left-[23px] top-[48px] w-0 h-[calc(100%-12px)] border-l-2 border-dashed border-secondary/30" />
                                                )}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                                                <p className="text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;