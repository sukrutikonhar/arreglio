'use client';

import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    services: string[];
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        services: [],
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Generic change that clears each field's error
    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value = e.target.value;
        if (field === 'name') {
            // only letters and spaces
            value = value.replace(/[^A-Za-z\s]/g, '');
        }
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (field in errors) {
            setErrors((prev) => {
                const { [field]: _, ...rest } = prev;
                return rest;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus({ type: null, message: '' });

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! We have received your inquiry and will get back to you shortly via email.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                services: [],
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to submit the form. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleServiceChange = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    return (
        <div className="bg-[#F8F7FA] p-8 rounded shadow-sm w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name*"
                        className={`w-full border ${errors.name ? 'border-red-500' : 'border-secondary-200'} rounded px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#2ecc71]`}
                        value={formData.name}
                        onChange={handleChange('name')}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email Address*"
                        className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#2ecc71]`}
                        value={formData.email}
                        onChange={handleChange('email')}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter Subject*"
                        className={`w-full border ${errors.subject ? 'border-red-500' : 'border-gray-200'} rounded px-4 py-2 text-black bg-white focus:ring-2 focus:ring-[#2ecc71]`}
                        value={formData.subject}
                        onChange={handleChange('subject')}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="Message here"
                        rows={4}
                        className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded px-4 py-2 text-black bg-white resize-none focus:ring-2 focus:ring-[#2ecc71]`}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Checkbox Group */}
                <div className="pb-4">
                    <div className="text-lg text-[#707070] font-semibold mb-3">How Can We Help?</div>
                    <div className="flex gap-4 text-xs text-gray-700">
                        {['Bike', 'Garden', 'Store'].map((service) => (
                            <label key={service} className="flex items-center gap-1 text-sm text-[#707070]">
                                <input
                                    type="checkbox"
                                    className="accent-[#2ecc71] border-gray-200 text-[#707070]"
                                    checked={formData.services.includes(service)}
                                    onChange={() => handleServiceChange(service)}
                                />
                                {service}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#2ecc71] text-white font-semibold px-8 py-2 rounded shadow hover:bg-[#27ae60] transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Query'}
                </button>

                {/* Status Message */}
                {submitStatus.type && (
                    <div
                        className={`mt-4 p-4 rounded ${submitStatus.type === 'success'
                            ? 'bg-green-50 border border-green-200 text-green-700'
                            : 'bg-red-50 border border-red-200 text-red-700'
                            }`}
                    >
                        {submitStatus.message}
                    </div>
                )}
            </form>
        </div>
    );
} 