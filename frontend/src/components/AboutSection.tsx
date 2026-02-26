import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Human-centered design philosophy',
  'Performance-first development approach',
  'Transparent collaboration process',
  'Long-term partnership mindset',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              {/* Decorative frame */}
              <div className="absolute -inset-px rounded-2xl border border-amber/20 z-10 pointer-events-none" />
              <div className="bg-charcoal-mid p-8 rounded-2xl">
                {/* Abstract visual element */}
                <div className="aspect-square max-w-sm mx-auto relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-amber/20 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-2 border-amber/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-amber/20 border-2 border-amber/50 flex items-center justify-center shadow-amber-sm">
                          <img
                            src="/assets/generated/logo-mark.dim_128x128.png"
                            alt="Luminary"
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Orbiting dots */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-amber/60"
                      style={{
                        top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 90}px - 4px)`,
                        left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 90}px - 4px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { label: 'Happy Clients', value: '500+' },
                    { label: 'Team Members', value: '48' },
                    { label: 'Awards Won', value: '32' },
                    { label: 'Countries', value: '18' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-charcoal-light rounded-xl p-4 border border-border hover:border-amber/30 transition-colors duration-200"
                    >
                      <div className="font-display text-xl font-700 text-amber">{item.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-semibold tracking-widest uppercase mb-6">
              About Us
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-700 leading-tight tracking-tight mb-6">
              We Turn Ideas Into{' '}
              <span className="gradient-text">Digital Reality</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded on the belief that great design and powerful technology should work hand in hand,
              Luminary has been helping businesses transform their digital presence for over a decade.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Our multidisciplinary team of designers, engineers, and strategists collaborate closely
              with clients to deliver solutions that are not just beautiful — but genuinely effective.
              We measure success by the impact we create for the people who use what we build.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 size={18} className="text-amber flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
