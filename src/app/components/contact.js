"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Send Message");
    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        message: ""
    });

    const onFormUpdate = (key, value) => {
        setFormDetails(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
                }
            );
            console.log("Successfully sent email!");
            setFormDetails({ name: "", email: "", message: "" });
            setButtonText("Message Sent!");
            setTimeout(() => setButtonText("Send Message"), 2000);
        } catch (error) {
            console.log("Something went wrong...", error.text);
            setButtonText("Error! Try Again");
            setTimeout(() => setButtonText("Send Message"), 2000);
        }
    };

    return (
        <div className="max-w-[600px] h-[500px] text-custom_gray mx-auto px-4 py-8">
            <h1 className="text-white text-3xl text-center font-bold pb-8">Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                <input
                    name="name"
                    type="text"
                    value={formDetails.name}
                    placeholder="Name"
                    onChange={(e) => onFormUpdate('name', e.target.value)}
                    className="p-3 rounded-lg bg-[#112240] border border-gray-700 focus:border-gray-500 focus:outline-none placeholder-gray-500"
                    required
                />
                <input
                    name="email"
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    className="p-3 rounded-lg bg-[#112240] border border-gray-700 focus:border-gray-500 focus:outline-none placeholder-gray-500"
                    required
                />
                <textarea
                    name="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    className="p-3 rounded-lg bg-[#112240] border border-gray-700 focus:border-gray-500 focus:outline-none placeholder-gray-500 h-32 resize-none"
                    required
                />
                <button 
                    type="submit"
                    className="bg-[#112240] text-gray-300 py-3 px-6 rounded-lg border border-gray-700 hover:bg-[#1d3b75] transition-colors duration-300 disabled:opacity-50"
                    disabled={buttonText === 'Sending...'}
                >
                    {buttonText}
                </button>
            </form>
        </div>
    );
}