'use client';

import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'Can I run Arreglio from my phone or tablet?',
        answer: 'Yes, Arreglio works seamlessly on smartphones, tablets, and desktop computers. You can manage jobs, communicate with customers, and handle payments directly from your mobile device.'
    },
    {
        question: 'Do I need technical skills to use Arreglio?',
        answer: 'No technical skills required! Our platform is designed to be user-friendly and intuitive. We also provide free setup and onboarding support to help you get started.'
    }
];

export default function FAQSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        HAVE QUESTIONS? WE'VE GOT ANSWERS.
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {faq.question}
                            </h3>
                            <p className="text-gray-600">
                                {faq.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 