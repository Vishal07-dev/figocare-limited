import Image from "next/image";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Rigorous vetting and compliance checks for all candidates",
  "Specialising in NHS, private healthcare, and care home sectors",
  "Dedicated account managers for personalised service",
  "Nationwide coverage across England, Scotland, Wales, and Northern Ireland",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop"
                alt="Healthcare professionals discussing patient care at UK hospital - FIGO CARE recruitment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About FIGO CARE LTD
            </span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Your Trusted Partner in UK Healthcare Recruitment
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              FIGO CARE LTD is a leading UK healthcare staffing agency dedicated to 
              bridging the gap between exceptional healthcare professionals and the 
              organisations that need them most. With years of experience in the 
              UK healthcare sector, we understand the unique challenges faced by NHS 
              trusts, private hospitals, nursing homes, and care facilities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our commitment to quality, compliance, and candidate care has made us the 
              preferred staffing partner for healthcare providers across the United 
              Kingdom. We specialise in placing registered nurses, care assistants, 
              support workers, and clinical leads who meet the highest professional 
              standards.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg mt-10"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
