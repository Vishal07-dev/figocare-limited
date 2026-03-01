import { PhoneCall, UserCheck, Zap, FileCheck } from "lucide-react";
import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance for healthcare providers and candidates. Our dedicated team is always available to handle urgent staffing needs and provide immediate support whenever you need it.",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Fully Vetted Professionals",
    description:
      "Every healthcare professional undergoes rigorous screening including enhanced DBS checks, professional registration verification, comprehensive reference checks, and competency assessments.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Placement",
    description:
      "Our extensive database of pre-screened healthcare professionals enables rapid placement for temporary and permanent positions. We can often fill urgent shifts within hours of your request.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "UK Regulatory Compliance",
    description:
      "Full compliance with CQC regulations, NHS employment check standards, and UK healthcare requirements. We maintain up-to-date documentation and ensure all legal obligations are met.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-gray-50" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
            The FIGO CARE Advantage
          </h2>
          <p className="text-gray-600 text-lg">
            Discover why NHS trusts, private hospitals, and care homes across the 
            UK trust FIGO CARE LTD for their healthcare recruitment needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-3xl p-12 text-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-white/80">Healthcare Professionals</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
