import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTA = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1440x800.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/70 via-charcoal-deep/60 to-charcoal-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/50 via-transparent to-charcoal-deep/50" />
      </div>

      {/* Decorative amber orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome to the Future tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber/40 bg-amber/10 text-amber text-xs font-bold tracking-[0.2em] uppercase mb-3 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            Welcome to the Future
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
          </div>

          {/* HUZLUXE brand badge */}
          <div className="mb-8 animate-fade-in">
            <span className="font-display text-2xl font-800 tracking-[0.3em] text-amber uppercase">
              HUZLUXE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-800 leading-tight tracking-tight mb-6 animate-fade-up">
            <span className="text-foreground">Build Something</span>
            <br />
            <span className="gradient-text">Extraordinary</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            We craft digital experiences that inspire, engage, and deliver results.
            Elevate your vision with cutting-edge design and technology.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            <button
              onClick={handleCTA}
              className="group flex items-center gap-2 px-8 py-4 bg-amber text-charcoal-deep font-semibold rounded-xl hover:bg-amber-light transition-all duration-300 shadow-amber-md hover:shadow-amber-lg hover:-translate-y-0.5"
            >
              Explore Features
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-xl hover:border-amber/50 hover:bg-charcoal-light transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Stats row */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            {[
              { value: '500+', label: 'Projects' },
              { value: '98%', label: 'Satisfaction' },
              { value: '12+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-700 text-amber">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-amber transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
