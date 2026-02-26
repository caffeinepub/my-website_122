import { Zap, Shield, Layers, BarChart3, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    description:
      'Optimized from the ground up for speed. Our solutions load fast, respond instantly, and scale effortlessly under any load.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade security built into every layer. Your data and your users are protected with industry-leading standards.',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description:
      'Flexible, composable systems that grow with your needs. Add, remove, or swap components without disrupting the whole.',
  },
  {
    icon: BarChart3,
    title: 'Deep Analytics',
    description:
      'Actionable insights at your fingertips. Understand user behavior, track performance, and make data-driven decisions.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Deploy worldwide with confidence. Our infrastructure spans continents, ensuring low latency for every user, everywhere.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      'A real team behind every project. We provide ongoing support, maintenance, and guidance long after launch day.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-semibold tracking-widest uppercase mb-6">
            What We Offer
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-700 leading-tight tracking-tight mb-4">
            Features Built for{' '}
            <span className="gradient-text">Modern Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to build, launch, and grow — packaged into a cohesive platform
            designed for the way teams work today.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group relative bg-card rounded-2xl p-7 border border-border hover:border-amber/30 card-glow transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center mb-5 group-hover:bg-amber/20 group-hover:border-amber/40 transition-all duration-300 shadow-amber-sm">
                  <Icon size={22} className="text-amber" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-700 text-foreground mb-3 group-hover:text-amber transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-4 text-sm">
            Ready to see what we can build together?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3 border border-amber/40 text-amber font-semibold rounded-xl hover:bg-amber/10 hover:border-amber/70 transition-all duration-200 text-sm"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
