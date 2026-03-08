
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Zap, Calculator as CalcIcon } from "lucide-react";

export function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(1500000);
  const [reductionPercent, setReductionPercent] = useState(25);

  const annualSavings = monthlyBill * 12 * (reductionPercent / 100);
  const monthlySavings = monthlyBill * (reductionPercent / 100);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Calculate Your <span className="text-primary">Savings Potential</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use our quick estimator to see how much your business could save annually through professional energy optimization and audits.
            </p>
            <div className="space-y-8 mt-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="monthly-bill" className="text-base font-semibold">Average Monthly Energy Bill (₦)</Label>
                  <span className="font-bold text-primary text-xl">₦ {monthlyBill.toLocaleString()}</span>
                </div>
                <Slider
                  defaultValue={[monthlyBill]}
                  max={10000000}
                  step={50000}
                  onValueChange={(vals) => setMonthlyBill(vals[0])}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="reduction" className="text-base font-semibold">Estimated Efficiency Gain (%)</Label>
                  <span className="font-bold text-primary text-xl">{reductionPercent}%</span>
                </div>
                <Slider
                  defaultValue={[reductionPercent]}
                  max={40}
                  min={10}
                  step={1}
                  onValueChange={(vals) => setReductionPercent(vals[0])}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <Card className="border-2 shadow-xl bg-card">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CalcIcon className="text-primary" />
              </div>
              <CardTitle className="text-2xl font-headline">Estimated Annual Savings</CardTitle>
              <CardDescription>Based on Nigerian energy tariffs and engineering standards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">
                  ₦ {annualSavings.toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Per Year</p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t pt-8">
                <div className="text-center border-r">
                  <div className="text-2xl font-bold text-foreground">₦ {monthlySavings.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Monthly Savings</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{(annualSavings / 1100).toFixed(0)} kg</div>
                  <p className="text-xs text-muted-foreground">CO2 Reduction Est.</p>
                </div>
              </div>

              <Button className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90">
                Request Detailed Audit
              </Button>
              <p className="text-[10px] text-center text-muted-foreground italic">
                *This is a preliminary estimate. Actual savings depend on specific building conditions and equipment age.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
