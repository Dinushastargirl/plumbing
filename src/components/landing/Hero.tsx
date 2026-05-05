import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-20 md:pb-32 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-[#0047AB]">
              <Clock size={16} />
              <span>Available 24/7 for Emergencies</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-black leading-[1.1] text-gray-900 md:text-6xl lg:text-7xl">
              Expert Plumbing <br />
              <span className="text-[#0047AB]">& Drain Cleaning</span>
            </h1>
            
            <p className="mb-8 max-w-xl text-lg text-gray-600 md:text-xl">
              Arriving in 60 mins or less. Licensed professionals serving the USA community. 
              <span className="font-bold text-[#D22B2B]"> $50 Off your first service today.</span>
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <a 
                href="tel:1-800-555-0123" 
                className="flex items-center justify-center gap-3 rounded-xl bg-[#D22B2B] px-8 py-5 text-lg font-black text-white shadow-xl shadow-red-200 transition-all hover:-translate-y-1 hover:shadow-red-300"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <Star size={14} fill="white" />
                </div>
                CLICK TO CALL NOW
              </a>
              <a 
                href="#quote" 
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 px-8 py-5 text-lg font-bold text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
              >
                Book Online & Save $10
              </a>
            </div>
            
            <div className="mt-10 flex gap-8 text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600" size={20} />
                <span>Screened & Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-orange-500" size={20} />
                <span>BBB Accredited</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Visual element instead of heavy image */}
            <div className="aspect-square rounded-3xl bg-[#0047AB] p-8 shadow-2xl md:p-12">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border-4 border-dashed border-white/30 text-white">
                <div className="text-center">
                  <Star size={64} fill="#FFD700" stroke="#FFD700" className="mx-auto mb-4" />
                  <div className="text-6xl font-black md:text-8xl">4.9</div>
                  <div className="mt-2 text-xl font-bold uppercase tracking-widest opacity-80">Google Rating</div>
                  <div className="mt-6 flex justify-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="#FFD700" stroke="#FFD700" />)}
                  </div>
                  <p className="mt-6 text-sm font-medium opacity-70">Based on 2,500+ Local Reviews</p>
                </div>
              </div>
            </div>
            
            {/* Float badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl md:-bottom-10 md:-left-10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Star size={24} />
                </div>
                <div>
                  <div className="text-lg font-black text-gray-900">Arriving in</div>
                  <div className="text-3xl font-black text-[#0047AB]">60 MINS</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-1/3 bg-blue-50/50 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent)]" />
    </section>
  );
}
