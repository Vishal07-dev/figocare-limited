"use client";

import Image from "next/image";
import { DollarSign, Calendar, BookOpen, Heart } from "lucide-react";
import { ReactNode } from "react";

interface BenefitProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitProps[] = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Attractive Remuneration",
    description: "Earn what you deserve with rates that reflect your dedication and skill",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Pick shifts that fit your schedule and personal commitments",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Professional Development",
    description: "Access regular training to sharpen your expertise and grow your career",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Welcoming Team Culture",
    description: "Be part of an organisation that genuinely invests in your happiness",
  },
];

const hiringRoles = [
  { title: "Registered Nurses", location: "Positions available across England and Wales" },
  { title: "Mental Health Nurses", location: "Dedicated roles within specialist psychiatric units" },
  { title: "Senior Carers & Healthcare Assistants", location: "Serving care homes and residential facilities" },
  { title: "Support Workers", location: "Complex care, learning disability, and mental health settings" },
  { title: "Kitchen & Catering Assistants", location: "Healthcare catering roles countrywide" },
];

export default function JoinUs() {
  return (
    <section className="py-24 bg-white" aria-labelledby="join-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="join-us-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Build a Career That Matters
          </h2>
          <p className="text-gray-600 text-lg">
            Are you a dedicated healthcare professional seeking rewarding opportunities with real flexibility?
            Figo Care offers you the chance to shape your career while making a genuine impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Why Work With Figo Care
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            <a
              href="mailto:recruitment@figocare.co.uk"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg mt-8"
            >
              Apply Now – Submit Your CV
            </a>
          </div>

          {/* We're Hiring Section */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Current Openings
            </h3>
            <p className="text-gray-600 mb-8">
              We&apos;re actively recruiting talented individuals for the following positions:
            </p>
            <div className="space-y-4">
              {hiringRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900">{role.title}</h4>
                  <p className="text-gray-500 text-sm">{role.location}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-primary/10 rounded-xl">
              <p className="text-gray-700 font-medium">Send Your Application:</p>
              <a
                href="mailto:recruitment@figocare.co.uk"
                className="text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                recruitment@figocare.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
