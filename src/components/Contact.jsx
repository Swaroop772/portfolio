import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, Loader2 } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Get In <span className="text-neon-pink">Touch</span>
                    </h2>
                    <p className="text-gray-400">Let's build something extraordinary together.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Let's Connect</h3>
                            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                                I'm currently looking for new opportunities in <span className="text-blue-500 dark:text-neon-blue">AI/ML</span> and <span className="text-purple-500 dark:text-neon-purple">Data Science</span>.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a href="mailto:swaroopkurapati15@gmail.com" className="block bg-white/60 dark:bg-glass backdrop-blur-md border border-slate-200 dark:border-glass-border p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-glass/80 transition-all hover:border-blue-400 dark:hover:border-neon-blue/50 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-neon-blue/10 rounded-xl text-blue-600 dark:text-neon-blue group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">Email</p>
                                        <p className="text-slate-800 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors">swaroopkurapati15@gmail.com</p>
                                    </div>
                                </div>
                            </a>

                            <a href="tel:+917729036826" className="block bg-white/60 dark:bg-glass backdrop-blur-md border border-slate-200 dark:border-glass-border p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-glass/80 transition-all hover:border-purple-400 dark:hover:border-neon-purple/50 group">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-100 dark:bg-neon-purple/10 rounded-xl text-purple-600 dark:text-neon-purple group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">Phone</p>
                                        <p className="text-slate-800 dark:text-white font-medium group-hover:text-purple-600 dark:group-hover:text-neon-purple transition-colors">+91 77290-36826</p>
                                    </div>
                                </div>
                            </a>

                            <div className="block bg-white/60 dark:bg-glass backdrop-blur-md border border-slate-200 dark:border-glass-border p-6 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-pink-100 dark:bg-neon-pink/10 rounded-xl text-pink-600 dark:text-neon-pink">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">Location</p>
                                        <p className="text-slate-800 dark:text-white font-medium">Atmakur, Nellore, AP</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="text-slate-800 dark:text-white font-semibold mb-6">Follow Me</h4>
                            <div className="flex gap-4">
                                <MagneticButton>
                                    <a href="https://www.linkedin.com/in/swaroop-kurapati/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-lg dark:shadow-none">
                                        <Linkedin size={20} />
                                    </a>
                                </MagneticButton>
                                <MagneticButton>
                                    <a href="https://github.com/Swaroop772" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-gray-400 hover:text-white hover:bg-black hover:border-black transition-all duration-300 shadow-lg dark:shadow-none">
                                        <Github size={20} />
                                    </a>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/60 dark:bg-glass backdrop-blur-xl border border-slate-200 dark:border-glass-border rounded-3xl p-8 lg:p-10 shadow-2xl relative"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white dark:bg-secondary/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:focus:ring-neon-blue focus:border-transparent text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none transition-all shadow-inner"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white dark:bg-secondary/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:focus:ring-neon-blue focus:border-transparent text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none transition-all shadow-inner"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-5 py-4 bg-white dark:bg-secondary/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-400 dark:focus:ring-neon-blue focus:border-transparent text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 outline-none transition-all resize-none shadow-inner"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple hover:from-blue-700 hover:to-purple-700 dark:hover:from-neon-blue/90 dark:hover:to-neon-purple/90 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg dark:shadow-neon-blue/20"
                            >
                                {isSending ? (
                                    <>Sending... <Loader2 size={20} className="animate-spin" /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
