import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a CRM
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl bg-white p-12 text-center shadow-2xl">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900">Request Received!</h3>
        <p className="text-gray-600">
          Thank you for choosing RapidPipe. One of our expert dispatchers will reach out to you within 5 minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-gray-900">Rapid Quote</h3>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Average response time: 5 mins</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-900">Full Name</label>
          <input
            required
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#0047AB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0047AB]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold text-gray-900">Phone Number</label>
          <input
            required
            type="tel"
            id="phone"
            placeholder="(555) 000-0000"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#0047AB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0047AB]"
          />
        </div>

        <div>
          <label htmlFor="issue" className="mb-2 block text-sm font-bold text-gray-900">What do you need help with?</label>
          <select
            id="issue"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-[#0047AB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0047AB]"
          >
            <option>Emergency Repair</option>
            <option>Drain Cleaning</option>
            <option>Water Heater Issue</option>
            <option>Sewer Line Service</option>
            <option>General Maintenance</option>
            <option>Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#0047AB] py-4 text-lg font-black text-white shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 hover:bg-blue-700 active:scale-95"
        >
          <Send size={18} />
          GET MY FREE QUOTE
        </button>
        
        <p className="text-center text-xs font-semibold text-gray-400">
          Your information is 100% secure. We never sell your data.
        </p>
      </form>
    </div>
  );
}
