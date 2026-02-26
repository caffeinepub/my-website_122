import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Heart, Globe } from 'lucide-react';
import { SiInstagram, SiX, SiLinkedin } from 'react-icons/si';

const CONTACT_EMAIL = 'huzzu006@gmail.com';
const WEBSITE_DOMAIN = 'huzluxe.in';
const WEBSITE_URL = 'https://huzluxe.in';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactFooter() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name} via HUZLUXE`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const isFormValid = form.name.trim() && form.email.trim() && form.message.trim();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-amber/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-semibold tracking-widest uppercase mb-6">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-700 leading-tight tracking-tight mb-4">
              Let's Build Something{' '}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a project in mind or just want to say hello? We'd love to hear from you.
              Reach out and let's start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-display text-2xl font-700 text-foreground mb-2">
                  Contact HUZLUXE
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help bring your vision to life. Send us a message and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-5">
                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                    <Globe size={18} className="text-amber" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Website</div>
                    <a
                      href={WEBSITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-amber transition-colors duration-200"
                    >
                      {WEBSITE_DOMAIN}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-amber" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email</div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-foreground font-medium hover:text-amber transition-colors duration-200"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-amber" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Location</div>
                    <span className="text-foreground font-medium">Available Worldwide</span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-amber" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Response Time</div>
                    <span className="text-foreground font-medium">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                  {[
                    { icon: SiX, label: 'X (Twitter)', href: '#' },
                    { icon: SiInstagram, label: 'Instagram', href: '#' },
                    { icon: SiLinkedin, label: 'LinkedIn', href: '#' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-charcoal-light border border-border hover:border-amber/40 hover:bg-amber/10 flex items-center justify-center text-muted-foreground hover:text-amber transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-charcoal-mid rounded-2xl border border-border p-8 shadow-card">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center mb-4">
                    <Send size={24} className="text-amber" />
                  </div>
                  <h4 className="font-display text-xl font-700 text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Your email client should have opened. We'll get back to you at{' '}
                    <span className="text-amber">{CONTACT_EMAIL}</span> soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-sm font-semibold bg-amber text-charcoal-deep rounded-lg hover:bg-amber-light transition-all duration-200"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-light border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-light border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-light border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <span className="text-xs text-muted-foreground">
                      Sends to{' '}
                      <span className="text-amber font-medium">{CONTACT_EMAIL}</span>
                    </span>
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className="flex items-center gap-2 px-6 py-3 bg-amber text-charcoal-deep font-semibold rounded-xl hover:bg-amber-light transition-all duration-200 shadow-amber-sm hover:shadow-amber-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      Send Message
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-deep border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-amber/30">
                  <img
                    src="/assets/generated/logo-mark.dim_128x128.png"
                    alt="HUZLUXE"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display font-700 text-base tracking-tight text-amber">
                  HUZLUXE
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-3">
                Crafting extraordinary digital experiences that inspire and deliver results.
              </p>
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-amber/70 hover:text-amber transition-colors duration-200"
              >
                <Globe size={13} />
                {WEBSITE_DOMAIN}
              </a>
            </div>

            {/* Navigation */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Navigation
              </div>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-amber transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Contact
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href={WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors duration-200"
                  >
                    <Globe size={14} className="text-amber/60" />
                    {WEBSITE_DOMAIN}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-amber transition-colors duration-200"
                  >
                    <Mail size={14} className="text-amber/60" />
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} HUZLUXE. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Built with <Heart size={11} className="text-amber fill-amber" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'huzluxe')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-amber-light transition-colors duration-200"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
