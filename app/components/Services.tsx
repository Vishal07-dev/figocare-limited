import { Clock, Users, Globe, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Temporary Staffing",
    description:
      "Rapid response healthcare staffing for short-term cover, seasonal demands, and emergency situations. Our vetted professionals are available 24/7 to fill shifts at short notice across UK healthcare facilities.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Permanent Recruitment",
    description:
      "Strategic permanent placement solutions for healthcare organisations seeking long-term talent. We source, screen, and present qualified candidates who align with your organisational culture and requirements.",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "International Healthcare Hiring",
    description:
      "Comprehensive international recruitment services for NHS trusts and private healthcare providers. We manage visa sponsorship, OSCE preparation, and NMC registration support for overseas nurses.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Compliance & Vetting",
    description:
      "Thorough compliance management including enhanced DBS checks, right-to-work verification, reference checks, and professional registration validation. All candidates meet CQC and NHS standards.",
  },
];

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary/20">
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Comprehensive UK Healthcare Staffing Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From temporary cover to permanent placements, we provide end-to-end 
            healthcare recruitment services tailored to the unique needs of UK 
            hospitals, care homes, and NHS providers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
