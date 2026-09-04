import { useState } from 'react';
import {
  Mail,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" className="py-24 sm:py-28 bg-navy-950/40">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          icon={<MessageSquare size={16} />}
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-2">
          {/* Info */}
          <div className="space-y-4">
            <p className="text-slate-400 leading-relaxed">
              Open to data analyst opportunities, collaborations, and conversations.
              Feel free to reach out through any channel below.
            </p>

            <a
              href="mailto:deepakdk6264@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/50 border border-white/10 hover:border-accent-500/40 transition-colors group"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-500/15 text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
                <p className="text-white text-sm">deepakdk6264@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/deepak2005dk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/50 border border-white/10 hover:border-accent-500/40 transition-colors group"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-500/15 text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <Linkedin size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">LinkedIn</p>
                <p className="text-white text-sm">linkedin.com/in/deepak2005dk</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/50 border border-white/10">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-500/15 text-accent-400">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
                <p className="text-white text-sm">Namakkal, Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-navy-800/50 border border-white/10 p-6 space-y-4"
          >
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-navy-900/70 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-navy-900/70 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-navy-900/70 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent-500 hover:bg-accent-400 text-white font-medium shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
