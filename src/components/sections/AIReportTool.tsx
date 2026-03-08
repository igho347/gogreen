
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { generatePreliminaryEnergyOpportunityReport, type PreliminaryEnergyOpportunityReportOutput } from "@/ai/flows/preliminary-energy-opportunity-report";
import { Loader2, Sparkles, CheckCircle2, ChevronRight, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AIReportTool() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<PreliminaryEnergyOpportunityReportOutput | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    businessName: "",
    buildingType: "Hotel",
    monthlyEnergyBill: 0,
  });

  async function handleGenerateReport(e: React.FormEvent) {
    e.preventDefault();
    if (formData.monthlyEnergyBill <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid monthly energy bill amount.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await generatePreliminaryEnergyOpportunityReport(formData);
      setReport(result);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate report. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-report" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold bg-primary/5 text-primary border-primary/10">
              <Sparkles className="h-4 w-4" /> AI-Powered Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Get a <span className="text-primary">Preliminary Energy Opportunity Report</span> Instantly</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our engineering AI analyzes your building type and energy usage to provide a tailored snapshot of potential savings and prioritized services.
            </p>
            
            <form onSubmit={handleGenerateReport} className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name (Optional)</Label>
                <Input 
                  id="businessName" 
                  placeholder="e.g. Lagos Grand Hotel"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="buildingType">Building Type</Label>
                  <Select 
                    defaultValue="Hotel"
                    onValueChange={(val) => setFormData({...formData, buildingType: val})}
                  >
                    <SelectTrigger id="buildingType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hotel">Hotel</SelectItem>
                      <SelectItem value="Hospital">Hospital</SelectItem>
                      <SelectItem value="Factory">Factory</SelectItem>
                      <SelectItem value="Office Complex">Office Complex</SelectItem>
                      <SelectItem value="Supermarket">Supermarket</SelectItem>
                      <SelectItem value="University">University</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthlyBill">Avg. Monthly Energy Bill (₦)</Label>
                  <Input 
                    id="monthlyBill" 
                    type="number" 
                    placeholder="e.g. 2000000"
                    onChange={(e) => setFormData({...formData, monthlyEnergyBill: Number(e.target.value)})}
                  />
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 text-lg">
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</> : "Generate My Report"}
              </Button>
            </form>
          </div>

          <div className="relative">
            {!report && !loading && (
              <div className="border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px] bg-secondary/10">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-primary/40" />
                </div>
                <h3 className="text-xl font-headline font-bold text-muted-foreground mb-2">Report Preview</h3>
                <p className="text-muted-foreground max-w-xs">Fill out the form to generate your personalized energy analysis.</p>
              </div>
            )}

            {loading && (
              <div className="border rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px] bg-white animate-pulse">
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                <h3 className="text-xl font-headline font-bold mb-2">Analyzing Building Data</h3>
                <p className="text-muted-foreground">Applying Nigerian energy efficiency standards...</p>
              </div>
            )}

            {report && !loading && (
              <Card className="border-2 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
                <CardHeader className="bg-primary text-white pb-8">
                  <div className="flex justify-between items-start mb-4">
                    <Sparkles className="h-6 w-6 text-accent" />
                    <span className="text-xs uppercase tracking-widest font-bold opacity-70">Confidential Report</span>
                  </div>
                  <CardTitle className="text-2xl font-headline">{report.reportTitle}</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 space-y-8">
                  <div className="grid grid-cols-2 gap-6 bg-secondary/20 p-6 rounded-xl">
                    <div className="text-center border-r border-primary/10">
                      <div className="text-3xl font-bold text-primary">{report.potentialSavingsPercentage}%</div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Savings Potential</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">₦ {report.potentialSavingsNairaMonthly.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Monthly Cost Redux</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Strategic Summary</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{report.summary}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold flex items-center gap-2"><ChevronRight className="h-5 w-5 text-primary" /> Recommended Services</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {report.recommendedServices.map((service, i) => (
                        <li key={i} className="text-sm bg-muted p-2 rounded border-l-4 border-primary">{service}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-wider">Immediate Next Step</h4>
                    <p className="text-sm font-medium">{report.nextSteps}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 border-t bg-muted/50 p-6">
                  <Button className="flex-1">Schedule Consultation</Button>
                  <Button variant="outline" className="flex-1"><Download className="mr-2 h-4 w-4" /> Download PDF</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
