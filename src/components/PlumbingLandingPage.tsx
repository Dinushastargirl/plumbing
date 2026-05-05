import React from 'react';
import { motion } from 'motion/react';
import Header from './landing/Header';
import Hero from './landing/Hero';
import TrustBar from './landing/TrustBar';
import ServicesGrid from './landing/ServicesGrid';
import Testimonials from './landing/Testimonials';
import QuoteForm from './landing/QuoteForm';
import Footer from './landing/Footer';
import StickyCTA from './landing/StickyCTA';
import ZoloMiniBot from './ZoloMiniBot';

export default function PlumbingLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#0047AB] selection:text-white">
      {/* Schema.org for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PlumbingService",
          "name": "RapidPipe Plumbing",
          "image": "https://ais-dev-2r3bdvvd5ayo3mjerjpbfp-443025143747.asia-southeast1.run.app/logo.png",
          "telephone": "+1-800-555-0123",
          "url": "https://ais-dev-2r3bdvvd5ayo3mjerjpbfp-443025143747.asia-southeast1.run.app",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main St",
            "addressLocality": "Anytown",
            "addressRegion": "ST",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7128,
            "longitude": -74.0060
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "priceRange": "$$"
        })}
      </script>

      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Comprehensive Solutions for Every Need
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-20 bg-[#0047AB]" />
            </div>
            <ServicesGrid />
          </div>
        </section>

        <section id="quote" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Get Your Free, No-Obligation Quote
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                  Fill out the form below for a rapid response. Our expert team is ready to diagnose and resolve your plumbing issues today.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#0047AB]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Upfront Pricing — No Hidden Costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#0047AB]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Licensed, Bonded & Insured Professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#0047AB]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                What Our Customers Are Saying
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-20 bg-[#0047AB]" />
            </div>
            <Testimonials />
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
      <ZoloMiniBot />
    </div>
  );
}
