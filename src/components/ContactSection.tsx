import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare,
  MapPin,
  Clock
} from 'lucide-react';
import { studentProfile } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(studentProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${studentProfile.email}?subject=${encodeURIComponent(
      subject || 'Collaboration & Opportunity from Portfolio'
    )}&body=${encodeURIComponent(
      `Hi Manpreet,\n\n${message}\n\nFrom: ${senderName || 'Visitor'}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      {/* Spider background effects */}
      <div className="absolute inset-0 spider-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-t from-[#E22424]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111520] border border-white/10 text-xs font-semibold text-[#E22424] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-['Outfit'] leading-tight">
            &ldquo;Let&rsquo;s build <br />
            <span className="text-gradient-red">something.&rdquo;</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-['Plus_Jakarta_Sans']">
            Whether you want to discuss a software project, explore AI concepts, or connect with a dedicated 2nd-year CSE student from Chandigarh, my inbox is always open.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Channels & Socials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0E121B]/90 border border-white/10 hover:border-[#E22424]/40 transition-all duration-300 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#171D2D] border border-white/10 flex items-center justify-center text-[#E22424]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#1C2233] text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer border border-white/5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Direct Email
                </span>
                <a
                  href={`mailto:${studentProfile.email}`}
                  className="block text-lg sm:text-xl font-bold text-white hover:text-[#E22424] transition-colors mt-0.5 break-all"
                >
                  {studentProfile.email}
                </a>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Feel free to email me directly for internships, project collaborations, or technical discussions.
              </p>
            </motion.div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                id="contact-github-card"
                href={studentProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0E121B]/90 border border-white/10 hover:border-white/30 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#141824] flex items-center justify-center text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Outfit']">GitHub</h4>
                  <span className="text-xs text-neutral-400 font-mono">@mxnpreet7</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-card"
                href={studentProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0E121B]/90 border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#141824] flex items-center justify-center text-[#3B82F6]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Outfit']">LinkedIn</h4>
                  <span className="text-xs text-neutral-400 font-mono">Manpreet Singh</span>
                </div>
              </a>
            </div>

            {/* Location & Status Badge */}
            <div className="p-4 rounded-xl bg-[#0A0D14] border border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E22424]" />
                <span>Chandigarh, India</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Composer (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-7 sm:p-9 rounded-2xl bg-[#0B0E16]/90 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#E22424]" />
                  <h3 className="text-lg font-bold text-white font-['Outfit']">
                    Send a Message
                  </h3>
                </div>
                <span className="text-xs text-neutral-400 font-mono">
                  Direct Mail Dispatcher
                </span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="contact-sender-name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Johnson or Tech Team"
                    className="w-full px-4 py-3 rounded-xl bg-[#121622] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E22424] focus:ring-1 focus:ring-[#E22424] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Internship Inquiry / Web App Project / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#121622] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E22424] focus:ring-1 focus:ring-[#E22424] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Manpreet, I came across your portfolio and would like to connect regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121622] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E22424] focus:ring-1 focus:ring-[#E22424] transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-submit-email-btn"
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#E22424] hover:bg-[#C91E1E] text-white text-sm font-semibold tracking-wide shadow-lg shadow-[#E22424]/30 hover:shadow-[#E22424]/50 transition-all duration-200 cursor-pointer"
                >
                  <span>Dispatch Message via Email</span>
                  <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
