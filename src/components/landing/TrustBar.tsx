import React from 'react';
import { Shield, CheckCircle2, Award, Zap } from 'lucide-react';

export default function TrustBar() {
  const trusts = [
    { icon: <Shield size={24} />, label: "Licensed & Insured" },
    { icon: <CheckCircle2 size={24} />, label: "Screened & Approved" },
    { icon: <Award size={24} />, label: "BBB Accredited (A+)" },
    { icon: <Zap size={24} />, label: "60-Min Response" },
  ];

  return (
    <div className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trusts.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white/80 transition-colors hover:text-white">
              <div className="text-[#0047AB]">{item.icon}</div>
              <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
