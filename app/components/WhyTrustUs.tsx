import { ShieldCheck, Clock, FileCheck, Users, BookOpen } from "lucide-react";
import { ReactNode } from "react";

interface TrustFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface WhyTrustUsProps {
  variant?: "white" | "primary";
}

const trustFeatures: TrustFeatureProps[] = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Comprehensive Background Screening",
    description: "Every team member undergoes enhanced DBS checks, reference verification, and skills assessments before placement.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Operational Support",
    description: "Our coordination desk never closes — reach us any time for last-minute cover or pre-planned workforce needs.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Full Regulatory Compliance",
    description: "All placements follow strict CQC guidelines and meet the latest industry governance frameworks.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Bespoke Matching",
    description: "We take time to learn your facility culture and specific care priorities, ensuring each placement is the right fit.",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Continuous Professional Growth",
    description: "Our staff benefit from regular upskilling programmes that maintain high standards of clinical excellence.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Nationwide Coverage",
    description: "From London to Edinburgh, our network spans the entire UK — ensuring rapid staff deployment to any region at any time.",
  },
];

export default function WhyTrustUs({ variant = "white" }: WhyTrustUsProps) {
  const isPrimary = variant === "primary";
  
  return (
    <section className={`py-24 ${isPrimary ? "bg-primary" : "bg-white"}`} aria-labelledby="why-trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="why-trust-heading" className={`text-3xl sm:text-4xl font-bold mb-6 ${isPrimary ? "text-white" : "text-gray-900"}`}>
            Why Healthcare Providers Choose Figo Care
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center ${isPrimary ? "bg-white" : "bg-gray-50"}`}
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
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg ${isPrimary ? "bg-white hover:bg-gray-100 text-primary" : "bg-primary hover:bg-primary-dark text-white"}`}
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
