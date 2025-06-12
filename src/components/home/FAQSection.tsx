'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Can I run Arreglio from my phone or tablet?",
        answer: "Yes. Arreglio works seamlessly on smartphones, tablets, and desktop computers. You can manage jobs, communicate with customers, and handle payments directly from your mobile device."
    },
    {
        question: "Do I need technical skills to use Arreglio?",
        answer: "No, Arreglio is designed to be user-friendly and intuitive. Our platform is built for workshop owners and staff of all technical skill levels, with an easy-to-use interface and helpful support resources."
    },
    {
        question: "Which payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), direct bank transfers, and digital payment methods like PayPal. Contact us for specific payment arrangements."
    },
    {
        question: "Are there any discounts for people in need?",
        answer: "Yes, we offer special pricing for non-profits, educational institutions, and startups. Contact our sales team to learn more about our discount programs and eligibility criteria."
    },
    {
        question: "How can I manage my Account?",
        answer: "Managing your account is easy. Simply log in to your dashboard where you can update your profile, manage subscriptions, view billing history, and adjust notification settings."
    },
    {
        question: "Do you offer a free trial edit?",
        answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial - experience the full power of Arreglio risk-free."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <div className="w-full">
            <button
                onClick={onClick}
                className="w-full text-left p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex items-center justify-between group"
            >
                <span className="text-base text-gray-700 font-medium pr-4">{question}</span>
                <svg
                    className={`w-4 h-4 text-secondary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 text-gray-600 text-sm bg-gray-50 border-x border-b border-gray-200 rounded-b-xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            <span className="text-secondary">Have questions?</span> We've Got Answers.
                        </h2>
                    </div>

                    {/* FAQ Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 