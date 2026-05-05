import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Droplets, 
  Wrench, 
  Search, 
  ArrowRightCircle, 
  Wind 
} from 'lucide-react';

const services = [
  {
    title: "Emergency Repairs",
    description: "Burst pipes, major leaks, and system failures handled immediately.",
    icon: <Flame className="text-red-500" />,
    tag: "Priority"
  },
  {
    title: "Water Heaters",
    description: "Installation, repair, and maintenance for gas and electric models.",
    icon: <Wrench className="text-blue-500" />,
    tag: "Best Value"
  },
  {
    title: "Clogged Drains",
    description: "Professional snake and hydro-jetting to clear any obstruction fast.",
    icon: <Droplets className="text-[#0047AB]" />,
    tag: "Fast Track"
  },
  {
    title: "Leak Detection",
    description: "Hidden leak locating using thermal imaging and acoustic technology.",
    icon: <Search className="text-gray-600" />,
    tag: "Expert"
  },
  {
    title: "Sewer Lines",
    description: "Underground repair and replacement with minimal landscape disruption.",
    icon: <ArrowRightCircle className="text-orange-500" />,
    tag: "Specialist"
  },
  {
    title: "Sump Pumps",
    description: "Protect your basement from flooding with reliable pump services.",
    icon: <Wind className="text-green-500" />,
    tag: "Security"
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-[#0047AB]/5"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-[#0047AB] group-hover:text-white">
              {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0047AB] opacity-50">
              {service.tag}
            </span>
          </div>
          
          <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
          
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#0047AB] opacity-0 transition-opacity group-hover:opacity-100">
            <span>Learn More</span>
            <ArrowRightCircle size={14} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
