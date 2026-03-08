
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Energy Audits for Commercial Buildings",
      description: "Comprehensive Level 1 and 2 audits to identify where energy is being wasted across lighting, HVAC, and building envelopes.",
      benefits: ["Identify 15-25% waste immediate", "Verified utility baseline", "Equipment life-cycle analysis"],
      savings: "20% Avg.",
      img: "https://picsum.photos/seed/audit-serv/800/600",
      hint: "energy engineer audit"
    },
    {
      title: "Solar & Diesel Reduction Feasibility",
      description: "Data-backed analysis to determine the right size for a hybrid solar system that minimizes generator run-time and diesel costs.",
      benefits: ["ROI Modeling (4-6 years)", "System right-sizing", "Battery storage optimization"],
      savings: "40% Diesel Reduction",
      img: "https://picsum.photos/seed/solar-serv/800/600",
      hint: "commercial solar rooftop"
    },
    {
      title: "Cooling & HVAC Optimization",
      description: "Nigeria's heat makes cooling the #1 energy consumer. We optimize chiller plants, VRF systems, and split units for peak efficiency.",
      benefits: ["VFD Integration", "Smart thermostat deployment", "Refrigerant efficiency tuning"],
      savings: "30% HVAC Cost Redux",
      img: "https://picsum.photos/seed/hvac-serv/800/600",
      hint: "industrial air conditioning"
    },
    {
      title: "Building Energy Analytics",
      description: "Continuous real-time monitoring of energy consumption using IoT sensors to detect and stop energy leaks before they cost you millions.",
      benefits: ["Real-time dashboards", "Peak demand alerts", "Sub-metering for tenants"],
      savings: "10% Operational Gain",
      img: "https://picsum.photos/seed/data-serv/800/600",
      hint: "energy monitoring software"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Our Engineering <span className="text-accent">Services</span></h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We provide end-to-end energy efficiency solutions that combine technical auditing with implementation support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {services.map((service, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-headline font-bold text-foreground">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg inline-block border-l-4 border-primary">
                    <span className="text-sm font-bold uppercase text-primary tracking-wider">Expected Impact: </span>
                    <span className="font-headline font-bold text-xl">{service.savings}</span>
                  </div>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Inquire about this Service <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border bg-muted">
                  <Image 
                    src={service.img} 
                    alt={service.title}
                    fill
                    className="object-cover"
                    data-ai-hint={service.hint}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-secondary/20 border-y">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl font-headline font-bold">Ready to analyze your building?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our services are available nationwide, serving the unique challenges of the Nigerian power sector.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started with a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
