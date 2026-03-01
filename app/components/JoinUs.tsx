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
    title: "Competitive Pay",
    description: "Well-deserved pay for well-delivered care",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible Work Schedules",
    description: "Choose shifts that work around your life",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Continuous Training",
    description: "Develop your skills and advance your career",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Supportive Environment",
    description: "Join a team that values your wellbeing",
  },
];

const hiringRoles = [
  { title: "Registered Nurses", location: "Various locations across the UK" },
  { title: "Mental Health Nurses", location: "Specialist roles in mental health facilities" },
  { title: "Senior Carer & Healthcare Assistants", location: "For nursing homes and residential care" },
  { title: "Support Workers", location: "Learning disability and mental health support" },
  { title: "Kitchen & Catering Assistants", location: "For healthcare facilities nationwide" },
];

export default function JoinUs() {
  return (
    <section className="py-24 bg-white" aria-labelledby="join-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="join-us-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Be Part of Something Meaningful
          </h2>
          <p className="text-gray-600 text-lg">
            Are you a caring professional looking for flexibility, growth, and purpose?
            Join FIGO CARE and make a difference where it matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Benefits of Joining Us
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
              Apply Now – Send Your CV
            </a>
          </div>

          {/* We're Hiring Section */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              We&apos;re Hiring
            </h3>
            <p className="text-gray-600 mb-8">
              We&apos;re currently looking for dedicated professionals to fill these roles:
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
              <p className="text-gray-700 font-medium">Email to Apply:</p>
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
