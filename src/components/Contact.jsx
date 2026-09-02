import React, { useState, useRef } from 'react';
import { Send, ArrowUpRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); setIsSending(true); setStatus({ type: '', message: '' });
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
      setIsSending(false); setStatus({ type: 'error', message: 'Email service is not configured yet.' }); return;
    }
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(() => {
      setStatus({ type: 'success', message: 'Thanks — your message has been sent.' });
      setFormData({ name: '', email: '', message: '' });
    }, () => setStatus({ type: 'error', message: 'Could not send the message. Please try again.' })).finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="section-kicker">03 — Contact</p>
            <h2 className="section-heading mt-4">Got a project<br /><span>in mind?</span></h2>
            <p className="mt-7 max-w-md text-base leading-7 text-slate-400">Have an idea, opportunity or just want to talk tech? Drop me a message and I'll get back to you.</p>
            <a href="mailto:swaroopkurapati15@gmail.com" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-white">swaroopkurapati15@gmail.com <ArrowUpRight size={15} /></a>
          </motion.div>

          <motion.form ref={formRef} onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-7">
            <label className="block"><span className="form-label">Your name</span><input name="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required className="form-input" placeholder="John Doe" /></label>
            <label className="block"><span className="form-label">Email address</span><input name="email" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required className="form-input" placeholder="john@example.com" /></label>
            <label className="block"><span className="form-label">Tell me about it</span><textarea name="message" rows="5" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required className="form-input resize-none" placeholder="I have an idea for..." /></label>
            {status.message && <p className={status.type === 'success' ? 'text-sm text-teal' : 'text-sm text-coral'}>{status.message}</p>}
            <button disabled={isSending} className="btn-primary w-full sm:w-auto">{isSending ? <>Sending <Loader2 size={16} className="animate-spin" /></> : <>Send message <Send size={16} /></>}</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
