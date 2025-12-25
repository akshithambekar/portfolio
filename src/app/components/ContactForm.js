"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("send");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "first name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        try {
            const templateParams = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                message: formData.message,
            };

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
            );

            setSubmitStatus("sent");
            setTimeout(() => {
                setSubmitStatus("send");
            }, 3000);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Failed to send email:", error);
            setErrors({
                submit: "failed to send message. please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full pt-3 md:pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 md:pb-4">
                <div>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="first name"
                        disabled={isSubmitting}
                        className="w-full bg-transparent border border-current text-lg md:text-xl font-thin py-2 px-3 opacity-60 focus:opacity-100 hover:opacity-100 transition-opacity duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-current"
                    />
                    {errors.firstName && (
                        <p className="text-xs md:text-sm text-red-500/80 dark:text-red-400/80 pt-1">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="last name"
                        disabled={isSubmitting}
                        className="w-full bg-transparent border border-current text-lg md:text-xl font-thin py-2 px-3 opacity-60 focus:opacity-100 hover:opacity-100 transition-opacity duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-current"
                    />
                    {errors.lastName && (
                        <p className="text-xs md:text-sm text-red-500/80 dark:text-red-400/80 pt-1">
                            {errors.lastName}
                        </p>
                    )}
                </div>
            </div>

            <div className="pb-3 md:pb-4">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email"
                    disabled={isSubmitting}
                    className="w-full bg-transparent border border-current text-lg md:text-xl font-thin py-2 px-3 opacity-60 focus:opacity-100 hover:opacity-100 transition-opacity duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-current"
                />
                {errors.email && (
                    <p className="text-xs md:text-sm text-red-500/80 dark:text-red-400/80 pt-1">
                        {errors.email}
                    </p>
                )}
            </div>

            <div className="pb-2">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="message"
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border border-current text-lg md:text-xl font-thin py-2 px-3 opacity-60 focus:opacity-100 hover:opacity-100 transition-opacity duration-300 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-current overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-current [&::-webkit-scrollbar-thumb]:opacity-50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding"
                />
                {errors.message && (
                    <p className="text-xs md:text-sm text-red-500/80 dark:text-red-400/80">
                        {errors.message}
                    </p>
                )}
            </div>

            <div className="flex justify-center pb-10 md:pb-16">
                <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === "sent"}
                    className="relative text-lg md:text-xl border border-current py-2 px-8 opacity-60 hover:opacity-100 overflow-hidden transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed group text-current"
                >
                    <span className="absolute inset-0 bg-current transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--body-bg)]">
                        {submitStatus}
                    </span>
                </button>
            </div>

            {errors.submit && (
                <p className="text-xs md:text-sm text-red-500/80 dark:text-red-400/80 pt-4">
                    {errors.submit}
                </p>
            )}
        </form>
    );
}
