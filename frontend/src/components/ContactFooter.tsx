import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SiX, SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';
import { useState } from 'react';

const socialLinks = [
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiGithub, href: '#', label: 'GitHub' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
];

const contactInfo = [
  { icon: Mail, label: 'contact@luminary.io' },
  { icon: Phone, label: '+1 (415) 823-5670' },
  { icon: MapPin, label: '350 Market St, Suite 900, San Francisco, CA 94105' },
];

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export default function ContactFooter() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(window.location.hostname || 'luminary-website');

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber/4 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-semibold tracking-widest uppercase mb-6">
                Get In Touch
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-700 leading-tight tracking-tight mb-6">
                Let's Build Something{' '}
                <span className="gradient-text">Together</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Have a project in mind? We'd love to hear about it. Send us a message and
                we'll get back to you within 24 hours.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-10">
                {contactInfo.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-amber" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-charcoal-light border border-border flex items-center justify-center text-muted-foreground hover:text-amber hover:border-amber/40 hover:bg-amber/10 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-amber/20 border-2 border-amber/40 flex items-center justify-center mb-4 shadow-amber-sm">
                    <Mail size={28} className="text-amber" />
                  </div>
                  <h3 className="font-display text-xl font-700 text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-charcoal-light border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-charcoal-light border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-charcoal-light border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/30 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber text-charcoal-deep font-semibold rounded-xl hover:bg-amber-light transition-all duration-200 shadow-amber-sm hover:shadow-amber-md text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-deep border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-amber/30">
                <img
                  src="/assets/generated/logo-mark.dim_128x128.png"
                  alt="Luminary"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-700 text-foreground">Luminary</span>
            </div>

            {/* Nav links */}
            <nav className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs text-muted-foreground hover:text-amber transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Luminary. All rights reserved.
            </p>
          </div>

          {/* Attribution */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
              Built with{' '}
              <Heart size={12} className="text-amber fill-amber" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-amber-light transition-colors duration-200 font-medium"
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
