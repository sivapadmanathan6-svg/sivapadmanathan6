import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Identifying name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Secure return address/email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Valid email syntax is required.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject classification is required.';
    if (!formData.message.trim()) tempErrors.message = 'Core transmission body is empty.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury cloud ingestion delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success notification after delay
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com',
      hoverColor: 'hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5',
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com',
      hoverColor: 'hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5',
    },
    {
      name: 'Email (Primary)',
      icon: 'Mail',
      url: 'mailto:sivapadmanathan06@gmail.com?subject=Contact%20From%20Portfolio',
      hoverColor: 'hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-500/5',
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] rounded-full radial-glow-purple opacity-15 animate-pulse duration-[12000ms]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left space-y-4">
          <div className="flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-[10px] font-mono tracking-widest text-[#ec4899] font-bold uppercase">
              CHAPTER_05 // INTERFACE_CONNECT
            </span>
            <div className="h-[1px] w-8 bg-[#ec4899]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 text-glow">Communication</span>
          </h2>
          <p className="text-zinc-405 max-w-xl font-sans font-light text-sm md:text-base leading-relaxed">
            Ready to design elite products and tackle complex backend problems. Fire up a safe transmission line, or connect via standard handles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Socials, Status dashboard tracker */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Status dashboard panel */}
            <div className="glass-card ring-1 ring-white/[0.04] p-6 rounded-2xl relative overflow-hidden space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                  ACTIVE_LINK_TERMINAL
                </span>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                  ●_ONLINE
                </span>
              </div>

              <div className="space-y-3 leading-snug">
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Available for full-time junior positions, high-end freelance contracts, and open-source systems deployment.
                </p>
                <div className="flex items-center space-x-3 text-xs text-zinc-400">
                  <LucideIcon name="MapPin" className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-zinc-300">BASED_IN: UNITED_KINGDOM (GLOBAL_REMOTE)</span>
                </div>
              </div>
            </div>

            {/* Social Anchor Buttons */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                SECURE_SOCIAL_CHANNELS
              </h4>
              <div className="flex flex-col space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 rounded-xl border border-white/[0.05] bg-white/[0.01] text-zinc-300 hover:text-white flex items-center justify-between transition-all duration-300 cursor-pointer ${link.hoverColor}`}
                  >
                    <div className="flex items-center space-x-3">
                      <LucideIcon name={link.icon} className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                      <span className="text-xs font-semibold tracking-wide font-display">{link.name}</span>
                    </div>
                    <LucideIcon name="ArrowUpRight" className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card ring-1 ring-white/[0.05] p-8 md:p-10 rounded-3xl relative">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Inputs Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase flex justify-between">
                      <span>Full Name</span>
                      {errors.name && <span className="text-pink-500 lowercase">*</span>}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] text-zinc-150 text-sm focus:outline-none py-3 px-4 rounded-xl transition-all font-sans ${
                        errors.name
                          ? 'border-pink-500/40 focus:border-pink-500'
                          : 'border-white/[0.06] focus:border-purple-500/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] font-mono text-pink-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase flex justify-between">
                      <span>Secure Email</span>
                      {errors.email && <span className="text-pink-500 lowercase">*</span>}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. secure@domain.com"
                      className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] text-zinc-150 text-sm focus:outline-none py-3 px-4 rounded-xl transition-all font-sans ${
                        errors.email
                          ? 'border-pink-500/40 focus:border-pink-500'
                          : 'border-white/[0.06] focus:border-purple-500/50'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] font-mono text-pink-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase flex justify-between">
                    <span>Subject Classification</span>
                    {errors.subject && <span className="text-pink-500 lowercase">*</span>}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Core Application Integration Contract"
                    className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] text-zinc-150 text-sm focus:outline-none py-3 px-4 rounded-xl transition-all font-sans ${
                      errors.subject
                        ? 'border-pink-500/40 focus:border-pink-500'
                        : 'border-white/[0.06] focus:border-purple-500/50'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[10px] font-mono text-pink-500 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase flex justify-between">
                    <span>Core Transmission Body</span>
                    {errors.message && <span className="text-pink-500 lowercase">*</span>}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Classified instructions/queries go here..."
                    className={`w-full bg-white/[0.02] border focus:bg-white/[0.04] text-zinc-150 text-sm focus:outline-none py-3.5 px-4 rounded-xl transition-all font-sans resize-none ${
                      errors.message
                        ? 'border-pink-500/40 focus:border-pink-500'
                        : 'border-white/[0.06] focus:border-purple-500/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] font-mono text-pink-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Action Submit Trigger */}
                <div className="relative pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 text-white shadow-lg shadow-purple-600/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.01] active:scale-[0.99] duration-200 cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                        <span>INGESTING_TRANSMISSION...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND_SECURE_TRANSMISSION</span>
                        <LucideIcon name="Send" className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Success Ingested Overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-[#09090b]/95 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <LucideIcon name="CheckCircle2" className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-display font-bold text-white">
                        TRANSMISSION_INGESTED
                      </h3>
                      <p className="text-xs font-mono text-zinc-500">
                        STATUS: SUCCESS // 202 SECURE_OK
                      </p>
                    </div>
                    <p className="text-xs text-zinc-400 max-w-sm font-sans leading-relaxed">
                      Thank you. Your message has successfully navigated through our portfolio pipelines. Kaelen will review and decrypt this transaction shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
