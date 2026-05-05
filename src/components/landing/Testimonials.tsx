import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "John Sanderson",
    location: "Chicago, IL",
    text: "Called at 2 AM for a burst pipe. The technician arrived in exactly 45 minutes and had the water shut off and fixed before sunrise. Absolute lifesavers!",
    rating: 5,
    date: "2 days ago"
  },
  {
    name: "Sarah Miller",
    location: "Anytown, ST",
    text: "Honest, upfront pricing. I've had bad experiences with plumbers before, but RapidPipe was transparent from the start. $50 off was a great bonus too.",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "David Chen",
    location: "Suburban Heights",
    text: "Very professional. They wore shoe covers and left my kitchen cleaner than they found it. Highly recommend for any drain cleaning work.",
    rating: 5,
    date: "3 weeks ago"
  }
];

export default function Testimonials() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {reviews.map((review, index) => (
        <div key={index} className="flex flex-col rounded-3xl bg-white p-8 shadow-lg shadow-gray-100 transition-transform hover:-translate-y-1">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-1 text-orange-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-tight text-gray-400">
              {review.date}
            </div>
          </div>
          
          <Quote className="mb-4 text-[#0047AB] opacity-20" size={32} />
          
          <p className="mb-8 flex-1 italic text-gray-700 leading-relaxed">
            "{review.text}"
          </p>
          
          <div className="flex items-center gap-3 border-t pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-[#0047AB]">
              {review.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-gray-900">
                {review.name}
                <CheckCircle2 size={14} className="text-blue-500" />
              </div>
              <div className="text-xs text-gray-500 font-medium">{review.location} — Verified Customer</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
