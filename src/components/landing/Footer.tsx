import React from 'react';
import { Droplets, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-28 md:pb-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0047AB] text-white">
                <Droplets size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">RAPID<span className="opacity-50">PIPE</span></span>
            </div>
            <p className="mb-8 max-w-sm text-gray-400 leading-relaxed">
              Providing professional, reliable, and family-oriented plumbing services across the USA. Available 24/7 for all your plumbing emergencies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold uppercase tracking-widest text-xs text-white/40">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#services" className="transition-colors hover:text-white">Our Services</a></li>
              <li><a href="#reviews" className="transition-colors hover:text-white">Customer Reviews</a></li>
              <li><a href="#quote" className="transition-colors hover:text-white">Request a Quote</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Emergency Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold uppercase tracking-widest text-xs text-white/40">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#0047AB]" />
                <a href="tel:1-800-555-0123" className="transition-colors hover:text-white">(800) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#0047AB]" />
                <a href="mailto:help@rapidpipe.com" className="transition-colors hover:text-white">help@rapidpipe.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#0047AB]" />
                <span>USA HQ</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} RapidPipe Plumbing Services. Licensed, Bonded & Insured. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
