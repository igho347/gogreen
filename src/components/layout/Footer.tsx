
import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">
                GoGreen <span className="text-foreground">Advisory</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nigeria's leading engineering-driven consultancy for building energy efficiency and diesel reduction.
            </p>
          </div>

          <div>
            <h3 className="font-headline font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-primary">Energy Audits</Link></li>
              <li><Link href="/services" className="hover:text-primary">Solar Feasibility</Link></li>
              <li><Link href="/services" className="hover:text-primary">HVAC Optimization</Link></li>
              <li><Link href="/services" className="hover:text-primary">Energy Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Request Audit</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline font-bold mb-4">Contact</h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Lagos & Abuja, Nigeria (Serving Nationwide)</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+234 WhatsApp Enabled</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contact@gogreenadvisory.ng</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} GoGreen Energy Advisory Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
