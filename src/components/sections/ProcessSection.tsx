
import { Database, Search, LineChart, FileText, Settings2 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      desc: "Gathering historical utility bills, diesel logs, and facility floor plans."
    },
    {
      icon: Search,
      title: "On-site Inspection",
      desc: "Physical audit of HVAC systems, lighting, and power factor correction."
    },
    {
      icon: LineChart,
      title: "Energy Modeling",
      desc: "Digital simulation of your building's energy consumption patterns."
    },
    {
      icon: FileText,
      title: "Cost Reduction Plan",
      desc: "Detailed technical proposal with ROI timelines and savings guarantees."
    },
    {
      icon: Settings2,
      title: "Implementation Support",
      desc: "Overseeing equipment retrofits or solar system installation."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Engineering-First <span className="text-primary">Process</span></h2>
          <p className="text-muted-foreground">A structured approach designed to eliminate waste and maximize building performance.</p>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group flex flex-col items-center text-center space-y-6">
                <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center border-2 border-transparent group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <step.icon className="h-10 w-10 text-primary group-hover:text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline font-bold text-xl">{i + 1}. {step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
