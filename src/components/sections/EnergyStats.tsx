
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Factory, Building, Hotel } from "lucide-react";

export function EnergyStats() {
  const stats = [
    {
      icon: TrendingDown,
      value: "25-35%",
      label: "Average Cost Reduction",
      description: "Typical savings for commercial clients after full optimization."
    },
    {
      icon: Hotel,
      value: "₦4.5M+",
      label: "Monthly Savings Potential",
      description: "Saved for a mid-sized Lagos hotel through HVAC retrofitting."
    },
    {
      icon: Building,
      value: "40%",
      label: "Diesel Consumption Cut",
      description: "Achieved by integrating smart solar-hybrid energy systems."
    },
    {
      icon: Factory,
      value: "18 Months",
      label: "Average Payback Period",
      description: "Time to recoup investment in building energy efficiency."
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">The Impact of Efficiency</h2>
          <p className="text-primary-foreground/80">Our engineering approach delivers measurable results for Nigerian businesses facing rising energy costs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardContent className="pt-6 text-center space-y-3">
                <stat.icon className="h-10 w-10 mx-auto text-accent" />
                <div className="text-3xl font-headline font-bold">{stat.value}</div>
                <div className="font-semibold text-lg">{stat.label}</div>
                <p className="text-sm text-white/60 leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
