import { Building2, Home, Users, MapPin, Brain, Heart } from "lucide-react";
import { ReactNode } from "react";

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const serviceAreas: ServiceItemProps[] = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Private Hospitals",
    description: "Specialized staff for various departments and roles.",
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "Nursing Homes",
    description: "Care professionals dedicated to elderly and long-term care.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Residential Care",
    description: "Staff for residential facilities and supported living.",
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Health Centres",
    description: "Support for community-based healthcare facilities.",
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "Learning Disability Services",
    description: "Specialized support for clients with learning disabilities.",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Mental Health Facilities",
    description: "Compassionate staff for mental health support and care.",
  },
];

export default function WhereWeWork() {
  return (
    <section className="py-24 bg-gray-50" aria-labelledby="where-we-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="where-we-work-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Where We Work
          </h2>
          <p className="text-gray-600 text-lg">
            We provide staffing solutions for a variety of healthcare settings, including:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary/20 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Our staff are trained, vetted, and ready to step in—short notice or long term.
          </p>
        </div>
      </div>
    </section>
  );
}
