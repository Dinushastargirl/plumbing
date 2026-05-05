import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full bg-white p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex gap-4">
        <a 
          href="tel:1-800-555-0123" 
          className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#D22B2B] py-4 text-sm font-black text-white shadow-lg active:scale-95"
        >
          <Phone size={18} fill="currentColor" />
          CALL NOW
        </a>
        <a 
          href="#quote" 
          className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#0047AB] py-4 text-sm font-black text-white shadow-lg active:scale-95"
        >
          <Calendar size={18} />
          BOOK ONLINE
        </a>
      </div>
    </div>
  );
}
