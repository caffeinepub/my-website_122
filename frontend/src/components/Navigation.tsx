import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'features', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'nav-blur bg-charcoal-deep/90 border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-amber/30 group-hover:ring-amber/70 transition-all duration-300 shadow-amber-sm">
              <img
                src="/assets/generated/logo-mark.dim_128x128.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start leading-none gap-0.5">
              <span className="font-display font-700 text-lg tracking-tight text-amber group-hover:text-amber-light transition-colors duration-200">
                HUZLUXE
              </span>
              <a
                href="https://huzluxe.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-[10px] text-amber/60 hover:text-amber transition-colors duration-200 leading-none"
              >
                <Globe size={9} />
                huzluxe.in
              </a>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-amber'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://huzluxe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber border border-amber/30 bg-amber/10 rounded-lg hover:bg-amber/20 hover:border-amber/50 transition-all duration-200"
            >
              <Globe size={12} />
              huzluxe.in
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2 text-sm font-semibold bg-amber text-charcoal-deep rounded-lg hover:bg-amber-light transition-all duration-200 shadow-amber-sm hover:shadow-amber-md"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-charcoal-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="nav-blur bg-charcoal-deep/95 border-t border-border px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-amber bg-amber/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-charcoal-light'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="https://huzluxe.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-amber border border-amber/30 bg-amber/10 rounded-lg hover:bg-amber/20 transition-all duration-200"
          >
            <Globe size={14} />
            huzluxe.in
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-1 px-4 py-3 text-sm font-semibold bg-amber text-charcoal-deep rounded-lg hover:bg-amber-light transition-all duration-200 text-center"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
