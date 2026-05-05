import React from 'react';
import { Phone, Droplets } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0047AB] text-white">
              <Droplets size={24} />
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter text-[#0047AB] md:text-2xl">RAPID<span className="text-gray-900">PIPE</span></span>
            </div>
          </div>
          
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0047AB]">Services</a>
            <a href="#reviews" className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0047AB]">Reviews</a>
            <a href="#quote" className="rounded-full bg-gray-100 px-5 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-200">Book Online</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:1-800-555-0123" 
              className="flex items-center gap-2 rounded-full bg-[#D22B2B] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-200 transition-transform hover:scale-105 active:scale-95 md:px-6"
            >
              <Phone size={18} fill="currentColor" />
              <span className="hidden md:inline">Call (800) 555-0123</span>
              <span className="md:hidden text-xs">Emergency Call</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
