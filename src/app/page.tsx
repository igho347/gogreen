
import { Hero } from "@/components/sections/Hero";
import { EnergyStats } from "@/components/sections/EnergyStats";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { AIReportTool } from "@/components/sections/AIReportTool";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Factory, Hotel, Building2, ShoppingCart, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const targetClients = [
    { name: "Hotels", icon: Hotel },
    { name: "Hospitals", icon: Building2 },
    { name: "Factories", icon: Factory },
    { name: "Supermarkets", icon: ShoppingCart },
    { name: "Universities", icon: GraduationCap },
    { name: "Office Complexes", icon: Building2 },
  ];

  const whatsappNumber = "2348037968737";

  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Client Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-video border shadow-xl">
              <Image 
                src="https://picsum.photos/seed/efficiency/800/600" 
                alt="Efficiency engineering"
                fill
                className="object-cover"
                data-ai-hint="energy management"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Leading Nigerian Businesses <span className="text-primary">Choose Us</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Engineering-Driven Insights", desc: "We don't just guess; we use precise mechanical engineering and energy modeling to find savings." },
                  { title: "Diesel Reduction Experts", desc: "Specialized knowledge in cutting expensive diesel generator runtime through solar and storage integration." },
                  { title: "Immediate ROI", desc: "Most of our recommendations pay for themselves in under 18 months through direct utility savings." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-headline font-bold text-xl">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-4">
                <Link href="/about">Learn About Our Expertise</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EnergyStats />

      {/* Target Sectors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Sectors We <span className="text-primary">Transform</span></h2>
            <p className="text-muted-foreground">Expert solutions tailored to the unique energy demands of Nigerian commercial operations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {targetClients.map((client, i) => (
              <Card key={i} className="text-center group hover:border-primary hover:shadow-md transition-all cursor-default">
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="mx-auto w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <client.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-headline font-bold text-sm tracking-tight">{client.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SavingsCalculator />
      <AIReportTool />
      <ProcessSection />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-headline font-bold">Ready to Start Saving?</h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Join 50+ Nigerian companies optimizing their energy footprint. Request your free preliminary audit consultation today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button asChild size="lg" variant="secondary" className="h-14 px-10 text-lg">
                <Link href="/contact">Request Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg border-white text-white hover:bg-white/10">
                <Link href={`https://wa.me/${whatsappNumber}`} target="_blank">WhatsApp Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
