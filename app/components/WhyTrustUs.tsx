import { ShieldCheck, Clock, FileCheck, Users, BookOpen } from "lucide-react";
import { ReactNode } from "react";

interface TrustFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const trustFeatures: TrustFeatureProps[] = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Fully Vetted Professionals",
    description: "All staff are DBS-checked, referenced, and comprehensively trained.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Available 24/7",
    description: "We're always ready to meet urgent or planned staffing needs, day or night.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Compliant Processes",
    description: "Our staffing processes adhere to all Care Quality Commission standards.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Personalized Service",
    description: "We understand your culture and care priorities to provide the perfect match.",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Ongoing Training",
    description: "Continuous professional development ensures consistent quality of care.",
  },
];

export default function WhyTrustUs() {
  return (
    <section className="py-24 bg-gray-50" aria-labelledby="why-trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="why-trust-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Healthcare Providers Trust FIGO CARE
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/Contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
          >
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
}
