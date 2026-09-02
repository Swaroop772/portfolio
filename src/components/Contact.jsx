import React, { useState, useRef } from 'react';
import { Send, ArrowUpRight, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (e) => {
    e.preventDefault(); setIsSending(true); setStatus({ type: '', message: '' });
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID, templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID, publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') { setIsSending(false); setStatus({ type: 'error', message: 'Email service is not configured yet.' }); return; }
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(() => { setStatus({ type: 'success', message: 'Thanks — your message has been sent.' }); setFormData({ name: '', email: '', message: '' }); }, () => setStatus({ type: 'error', message: 'Could not send the message. Please try again.' })).finally(() => setIsSending(false));
  };
  const update = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }}>
            <p className="section-kicker">Contact</p>
            <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .12, duration: .7 }} className="section-heading mt-4">Got a project<br /><span>in mind?</span></motion.h2>
            <p className="mt-7 max-w-md text-base leading-7 text-slate-400">Have an idea, opportunity or just want to talk tech? Drop me a message and I'll get back to you.</p>
            <motion.a whileHover={{ x: 6 }} href="mailto:swaroopkurapati15@gmail.com" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-white">swaroopkurapati15@gmail.com <ArrowUpRight size={15} /></motion.a>
          </motion.div>
          <motion.form ref={formRef} onSubmit={handleSubmit} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: .1 }} className="space-y-7">
            {[['name','Your name','John Doe','text'],['email','Email address','john@example.com','email']].map(([field,label,placeholder,type], i) => <motion.label key={field} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 + i * .1 }} className="block"><span className="form-label">{label}</span><input name={field} type={type} value={formData[field]} onChange={update(field)} required className="form-input transition-all duration-300 focus:-translate-y-0.5 focus:border-teal/60 focus:shadow-[0_8px_30px_rgba(45,212,191,0.08)]" placeholder={placeholder} /></motion.label>)}
            <motion.label initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .4 }} className="block"><span className="form-label">Tell me about it</span><textarea name="message" rows="5" value={formData.message} onChange={update('message')} required className="form-input resize-none transition-all duration-300 focus:-translate-y-0.5 focus:border-teal/60 focus:shadow-[0_8px_30px_rgba(45,212,191,0.08)]" placeholder="I have an idea for..." /></motion.label>
            <AnimatePresence mode="wait">{status.message && <motion.p key={status.message} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className={status.type === 'success' ? 'flex items-center gap-2 text-sm text-teal' : 'text-sm text-coral'}>{status.type === 'success' && <CheckCircle2 size={16} />}{status.message}</motion.p>}</AnimatePresence>
            <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: .97 }} disabled={isSending} className="btn-primary w-full sm:w-auto">{isSending ? <>Sending <Loader2 size={16} className="animate-spin" /></> : <>Send message <Send size={16} /></>}</motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
