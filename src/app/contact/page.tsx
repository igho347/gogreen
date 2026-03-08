
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const whatsappNumber = "2348037968737";
  const emailAddress = "i.knack@yahoo.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent",
      description: "Thank you for reaching out. We will contact you shortly.",
    });
  };

  return (
    <div className="flex flex-col">
      <section className="bg-white py-20 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-foreground">Contact <span className="text-primary">Us</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Partner with Nigeria's energy optimization experts. Fill out the form below to request a site audit or consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">Energy Audit Request Form</CardTitle>
                  <CardDescription>We'll respond within 24 business hours with a preliminary assessment.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input id="email" type="email" placeholder="john@company.com" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+234..." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business">Business Name</Label>
                        <Input id="business" placeholder="E.g. Lagos Plaza" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help? (Optional)</Label>
                      <Textarea id="message" placeholder="Describe your current energy challenges or audit requirements..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg">Submit Request</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-headline font-bold">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Email Us</p>
                      <Link href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {emailAddress}
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">WhatsApp</p>
                      <p className="text-muted-foreground">+234 803 796 8737</p>
                      <Link href={`https://wa.me/${whatsappNumber}`} className="text-primary text-sm font-bold hover:underline">Chat with an Expert →</Link>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Our Location</p>
                      <p className="text-muted-foreground">Victoria Island, Lagos</p>
                      <p className="text-xs text-muted-foreground">Serving Abuja, Port Harcourt, and Nationwide.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary/30 rounded-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-bold">Business Hours</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between text-muted-foreground">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
