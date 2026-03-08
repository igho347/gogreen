
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Our Engineering <span className="text-primary">Workflow</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We follow a rigorous, 5-step engineering process to ensure your energy transition is data-backed, financially sound, and technically robust.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-headline font-bold">What to expect from a <span className="text-primary">GoGreen Audit</span></h2>
              <p className="text-muted-foreground">A detailed look at the deliverables you receive after our analysis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Energy Performance Baseline", desc: "A definitive measurement of how much energy your building should be using versus what it actually uses." },
                { title: "System-by-System Analysis", desc: "Deep dive into HVAC, lighting, motors, and plug loads with specific efficiency ratings." },
                { title: "ROI & Payback Matrix", desc: "A financial breakdown for every recommended upgrade, showing months to payback." },
                { title: "Strategic Implementation Plan", desc: "A phased approach to retrofitting that minimizes disruption to your business." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 border rounded-2xl hover:bg-secondary/10 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-headline font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary p-8 md:p-12 rounded-3xl text-primary-foreground text-center space-y-6">
              <h3 className="text-2xl font-headline font-bold">Start Your Energy Optimization Journey</h3>
              <p className="text-primary-foreground/80 max-w-xl mx-auto">
                Stop guessing and start measuring. Our audits provide the clarity you need to make smart capital investments in energy efficiency.
              </p>
              <Button size="lg" variant="secondary" className="h-12 px-10" asChild>
                <Link href="/contact">Request Your Audit Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
