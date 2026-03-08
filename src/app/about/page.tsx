
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, LineChart } from "lucide-react";

export default function AboutPage() {
  const expertise = [
    { title: "Mechanical Engineering", icon: Zap },
    { title: "Energy Systems Modeling", icon: LineChart },
    { title: "Building Retrofitting", icon: ShieldCheck },
    { title: "Solar Feasibility", icon: Zap },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Engineering <span className="text-primary">Sustainable Performance</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              GoGreen Energy Advisory is a Lagos-based engineering firm dedicated to transforming the way Nigerian businesses consume power.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold">Our <span className="text-primary">Mission</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a country where energy costs represent up to 40% of operational expenses for some businesses, efficiency isn't just a sustainability goal—it's a financial necessity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between expensive electricity and operational profitability through data-driven engineering. Our team specializes in finding waste where others see standard operation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-secondary/20 rounded-xl">
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="font-bold text-sm tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/engineer-team/800/600" 
                alt="Our engineering team"
                fill
                className="object-cover"
                data-ai-hint="engineering team nigeria"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold">50+</div>
              <p className="text-xl font-medium">Projects Optimized</p>
              <p className="text-primary-foreground/60">Across Lagos, Abuja, and Port Harcourt.</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold">₦250M+</div>
              <p className="text-xl font-medium">Cumulative Savings</p>
              <p className="text-primary-foreground/60">Calculated annual energy cost reduction.</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold">100%</div>
              <p className="text-xl font-medium">Engineering Driven</p>
              <p className="text-primary-foreground/60">Zero guesswork, all technical analysis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-16">
          <h2 className="text-3xl font-headline font-bold">Built for Nigeria's <span className="text-primary">Energy Reality</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border bg-card text-left space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary font-bold">01</div>
              <h3 className="text-xl font-headline font-bold">Reliability Focused</h3>
              <p className="text-muted-foreground">We understand the fragility of the grid and build solutions that ensure performance even during outages.</p>
            </div>
            <div className="p-8 rounded-2xl border bg-card text-left space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary font-bold">02</div>
              <h3 className="text-xl font-headline font-bold">Local Expertise</h3>
              <p className="text-muted-foreground">Our engineers live and work in Nigeria, meaning we understand the specific hardware and climate challenges here.</p>
            </div>
            <div className="p-8 rounded-2xl border bg-card text-left space-y-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary font-bold">03</div>
              <h3 className="text-xl font-headline font-bold">Measurable ROI</h3>
              <p className="text-muted-foreground">Every recommendation is backed by a financial model showing exactly when you break even.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
