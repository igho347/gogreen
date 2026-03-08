
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Droplets, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/50 text-primary transition-colors">
              Data-Driven Energy Solutions for Nigeria
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              Reduce Your Building Energy Costs by <span className="text-primary italic underline decoration-accent">Up to 30%</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              GoGreen Energy Advisory helps Nigerian businesses drastically cut diesel and electricity expenses through expert engineering analysis and smart technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-md font-medium">
                <Link href="/contact">Request an Energy Audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-md font-medium">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Electricity Redux</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Diesel Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Certified Experts</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl"></div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/20">
              <Image
                src="https://picsum.photos/seed/energy-hero/800/800"
                alt="Modern building efficiency"
                fill
                className="object-cover"
                data-ai-hint="commercial solar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
