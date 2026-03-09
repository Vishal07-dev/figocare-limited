"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Shield, Clock, Award } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: <Shield className="w-5 h-5" />, label: "Regulatory Standards", value: "100%" },
  { icon: <Clock className="w-5 h-5" />, label: "Rapid Deployment", value: "< 2hrs" },
  { icon: <Award className="w-5 h-5" />, label: "Partner Retention", value: "97%" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-gray-700 text-sm font-medium">
                  Partnering with 500+ Healthcare Facilities Nationwide
                </span>
              </div>

              {/* Main Headline - SEO Optimized H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
                <span className="text-primary">FIGO CARE</span>
                <br />
                <span className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-semibold block mt-2">Premier UK Healthcare Staffing Agency</span>
              </h1>

              {/* Subheadline - SEO Optimized */}
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Connecting NHS trusts, private hospitals, and care homes with 
                rigorously vetted nurses, carers, and healthcare professionals — 
                available at short notice, 24 hours a day, 7 days a week.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="mailto:info@figocare.co.uk"
                  className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-primary/30 inline-flex items-center justify-center gap-3"
                >
                  Request Staff
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/Roles"
                  className="group bg-white border-2 border-gray-200 hover:border-primary hover:bg-primary/5 text-gray-700 hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-all inline-flex items-center justify-center gap-3"
                >
                  <Briefcase className="w-5 h-5" />
                  Explore Careers
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="flex flex-wrap gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm rounded-lg px-4 py-3"
                  >
                    <div className="text-primary">{stat.icon}</div>
                    <div>
                      <div className="text-gray-900 font-bold text-lg">{stat.value}</div>
                      <div className="text-gray-500 text-xs">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Featured Card */}
            <div
              className={`hidden lg:block transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-white border border-gray-100 rounded-3xl p-3 shadow-2xl">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/hero-nurse.jpg"
                      alt="UK registered nurse providing healthcare services - FIGO CARE LTD healthcare staffing"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">Rigorously Screened Talent</h3>
                          <p className="text-gray-500 text-sm">Background verified & professionally accredited</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-3 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">4,500+</div>
                  <div className="text-sm text-white/80">Skilled Professionals</div>
                </div>

                {/* Floating Accent */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
