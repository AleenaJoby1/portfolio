import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Copy, Check, Clock, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
  const { contact } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = () => {
    const targetEmail = contact.email || 'aleena.joby@example.com';
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const recipient = contact.email && contact.email.trim() !== ''
      ? contact.email.trim()
      : 'aleena.joby@example.com';

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Aleena,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmissionStatus('mailto_triggered');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#FAF9F6] dark:bg-[#0D0F14] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge={contact.sectionBadge}
          title={contact.sectionTitle}
          subtitle={contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info, Timezone & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white dark:bg-portfolio-dark-card rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft dark:shadow-dark-soft space-y-6 transition-colors duration-300">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 text-[#3478D4] dark:text-[#4C8DEF] text-xs font-semibold uppercase tracking-wider mb-2">
                  Communication
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#20232A] dark:text-[#F3F4F6] mb-2">
                  Let's Start a Conversation
                </h3>
                <p className="text-sm text-[#737780] dark:text-[#9CA3AF] leading-relaxed">
                  Whether you have an academic inquiry, collaborative opportunity, or just want to connect, feel free to reach out.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Location & Timezone Card */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3] dark:border-portfolio-dark-border transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-portfolio-dark-card text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-bold text-[#20232A] dark:text-[#F3F4F6] mt-0.5">
                      {contact.location}
                    </p>
                    <p className="text-[11px] text-[#737780] dark:text-[#9CA3AF] mt-0.5 flex items-center gap-1 font-medium">
                      <Globe size={11} className="text-[#3478D4] dark:text-[#4C8DEF]" /> Indian Standard Time (UTC +05:30)
                    </p>
                  </div>
                </div>

                {/* Email Address Card */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border border-[#EAE8E3] dark:border-portfolio-dark-border transition-colors duration-300">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-portfolio-dark-card text-[#3478D4] dark:text-[#4C8DEF] flex items-center justify-center shrink-0 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft-sm">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider">
                        Direct Email
                      </p>
                      <p className="text-sm font-semibold text-[#20232A] dark:text-[#F3F4F6] mt-0.5 break-all">
                        {contact.email && contact.email.trim() !== ''
                          ? contact.email
                          : 'aleena.joby@example.com'}
                      </p>
                      <span className="text-[10px] text-[#737780] dark:text-[#9CA3AF]">
                        {contact.email ? 'Click copy icon to copy' : 'Configure email in portfolio.js'}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border text-[#737780] dark:text-[#9CA3AF] hover:text-[#3478D4] dark:hover:text-[#4C8DEF] hover:border-[#3478D4]/40 dark:hover:border-[#4C8DEF]/40 transition-colors shadow-soft-sm shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-emerald-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </motion.button>
                </div>

                {/* Response Note */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 border border-[#3478D4]/15 dark:border-[#4C8DEF]/30 text-xs text-[#3478D4] dark:text-[#4C8DEF] font-semibold">
                  <Clock size={14} className="shrink-0" />
                  <span>Typically responds within 24–48 hours</span>
                </div>
              </div>

              {/* Social Channels (Filtered to hide empty URLs) */}
              <div className="pt-6 border-t border-[#EAE8E3] dark:border-portfolio-dark-border">
                <p className="text-xs font-bold text-[#737780] dark:text-[#9CA3AF] uppercase tracking-wider mb-3">
                  Online Profiles
                </p>
                <SocialLinks
                  socials={contact.socials}
                  email={contact.email}
                  variant="circle"
                  iconSize={18}
                />
                {!contact.socials.github && !contact.socials.linkedin && (
                  <p className="text-xs text-[#737780] dark:text-[#9CA3AF] italic mt-2">
                    GitHub & LinkedIn profiles will appear here automatically once set in portfolio.js
                  </p>
                )}
              </div>
            </div>

            {/* Privacy Assurance */}
            <div className="p-4 rounded-2xl bg-white dark:bg-portfolio-dark-card border border-[#EAE8E3] dark:border-portfolio-dark-border text-xs text-[#737780] dark:text-[#9CA3AF] flex items-start gap-2.5 shadow-soft-sm dark:shadow-dark-soft transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
              <span>
                Your message is pre-formatted directly into your system's default email client, ensuring genuine delivery.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white dark:bg-portfolio-dark-card rounded-2xl sm:rounded-3xl p-7 sm:p-10 border border-[#EAE8E3] dark:border-portfolio-dark-border shadow-soft dark:shadow-dark-soft transition-colors duration-300"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#20232A] dark:text-[#F3F4F6] mb-2"
                  >
                    Your Name <span className="text-[#3478D4] dark:text-[#4C8DEF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border text-sm text-[#20232A] dark:text-[#F3F4F6] placeholder:text-[#737780]/60 dark:placeholder:text-[#9CA3AF]/60 focus:bg-white dark:focus:bg-[#12151D] focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500 ring-2 ring-red-400/20'
                        : 'border-[#EAE8E3] dark:border-portfolio-dark-border focus:border-[#3478D4] dark:focus:border-[#4C8DEF] focus:ring-2 focus:ring-[#3478D4]/20 dark:focus:ring-[#4C8DEF]/20'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#20232A] dark:text-[#F3F4F6] mb-2"
                  >
                    Your Email <span className="text-[#3478D4] dark:text-[#4C8DEF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border text-sm text-[#20232A] dark:text-[#F3F4F6] placeholder:text-[#737780]/60 dark:placeholder:text-[#9CA3AF]/60 focus:bg-white dark:focus:bg-[#12151D] focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500 ring-2 ring-red-400/20'
                        : 'border-[#EAE8E3] dark:border-portfolio-dark-border focus:border-[#3478D4] dark:focus:border-[#4C8DEF] focus:ring-2 focus:ring-[#3478D4]/20 dark:focus:ring-[#4C8DEF]/20'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-bold uppercase tracking-wider text-[#20232A] dark:text-[#F3F4F6] mb-2"
                >
                  Subject <span className="text-[#3478D4] dark:text-[#4C8DEF]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Academic Collaboration / Inquiry / Greeting"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border text-sm text-[#20232A] dark:text-[#F3F4F6] placeholder:text-[#737780]/60 dark:placeholder:text-[#9CA3AF]/60 focus:bg-white dark:focus:bg-[#12151D] focus:outline-none transition-all ${
                    errors.subject
                      ? 'border-red-400 focus:border-red-500 ring-2 ring-red-400/20'
                      : 'border-[#EAE8E3] dark:border-portfolio-dark-border focus:border-[#3478D4] dark:focus:border-[#4C8DEF] focus:ring-2 focus:ring-[#3478D4]/20 dark:focus:ring-[#4C8DEF]/20'
                  }`}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#20232A] dark:text-[#F3F4F6]"
                  >
                    Your Message <span className="text-[#3478D4] dark:text-[#4C8DEF]">*</span>
                  </label>
                  <span className="text-[11px] text-[#737780] dark:text-[#9CA3AF]">
                    {formData.message.length} characters
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-portfolio-dark-surface border text-sm text-[#20232A] dark:text-[#F3F4F6] placeholder:text-[#737780]/60 dark:placeholder:text-[#9CA3AF]/60 focus:bg-white dark:focus:bg-[#12151D] focus:outline-none resize-y transition-all ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500 ring-2 ring-red-400/20'
                      : 'border-[#EAE8E3] dark:border-portfolio-dark-border focus:border-[#3478D4] dark:focus:border-[#4C8DEF] focus:ring-2 focus:ring-[#3478D4]/20 dark:focus:ring-[#4C8DEF]/20'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Notification */}
              {submissionStatus === 'mailto_triggered' && (
                <div className="p-4 rounded-xl bg-[#EEF5FF] dark:bg-[#4C8DEF]/15 border border-[#3478D4]/25 dark:border-[#4C8DEF]/30 flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#3478D4] dark:text-[#4C8DEF] mt-0.5 shrink-0" />
                  <div className="text-xs text-[#20232A] dark:text-[#F3F4F6]">
                    <p className="font-bold text-[#3478D4] dark:text-[#4C8DEF]">
                      Draft Prepared in Email Client
                    </p>
                    <p className="mt-0.5 text-[#737780] dark:text-[#9CA3AF]">
                      Your message has been loaded into your default email application. Please review and click send!
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#3478D4] dark:bg-[#4C8DEF] text-white font-semibold text-sm shadow-soft hover:bg-[#2963B2] dark:hover:bg-[#3B82F6] hover:shadow-soft-hover dark:hover:shadow-dark-hover transition-all duration-200 active:scale-[0.99] group"
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
