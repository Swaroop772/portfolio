import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, Loader2 } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import SpotlightCard from './ui/SpotlightCard';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: '', message: '' });

        // These IDs should be in your .env file
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Fallback check if keys are missing
        if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
            setIsSending(false);
            setStatus({
                type: 'error',
                message: 'EmailJS keys are missing! Please check your .env file.'
            });
            console.error("EmailJS keys are missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.");
            return;
        }

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-400 text-lg mb-8">
                            I'm currently looking for new opportunities in AI/ML and Data Science.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <SpotlightCard className="rounded-xl p-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 bg-slate-800 rounded-lg text-accent">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href="mailto:swaroopkurapati15@gmail.com" className="hover:text-white transition-colors">swaroopkurapati15@gmail.com</a>
                                    </div>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="rounded-xl p-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 bg-slate-800 rounded-lg text-accent">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <a href="tel:+917729036826" className="hover:text-white transition-colors">+91 77290-36826</a>
                                    </div>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="rounded-xl p-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 bg-slate-800 rounded-lg text-accent">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p>Atmakur, Nellore, AP</p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <MagneticButton>
                                    <a href="https://www.linkedin.com/in/swaroop-kurapati/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 block">
                                        <Linkedin size={24} />
                                    </a>
                                </MagneticButton>
                                <MagneticButton>
                                    <a href="https://github.com/Swaroop772" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 block">
                                        <Github size={24} />
                                    </a>
                                </MagneticButton>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <SpotlightCard className="rounded-xl p-8">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500 outline-none transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSending ? (
                                    <>Sending... <Loader2 size={18} className="animate-spin" /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default Contact;
