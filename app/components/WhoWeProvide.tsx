import Image from "next/image";
import { Stethoscope, HeartPulse, Users, Activity, UtensilsCrossed, Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface RoleItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const roles: RoleItemProps[] = [
  {
    icon: <Stethoscope className="w-10 h-10" />,
    title: "Registered Nurses",
    description: "RGNs, RMNs with verified qualifications and experience",
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Senior Carer & Healthcare Assistants",
    description: "Trained HCAs for direct patient and resident care",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Support Workers",
    description: "Dedicated professionals for complex care needs",
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Allied Health Professionals",
    description: "Specialists across multiple healthcare disciplines",
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10" />,
    title: "Catering Assistants",
    description: "Food service specialists for healthcare environments",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Cleaners",
    description: "Maintaining hygiene standards in healthcare settings",
  },
];

export default function WhoWeProvide() {
  return (
    <section className="py-24 bg-gray-50" aria-labelledby="who-we-provide-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="who-we-provide-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Who We Provide
          </h2>
          <p className="text-gray-600 text-lg">
            We match you with reliable professionals for roles including:
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary/20 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {role.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{role.title}</h3>
              <p className="text-gray-600 leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        {/* <div className="mt-16 relative h-80 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
            alt="Healthcare professionals collaborating - FIGO CARE team"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div> */}
      </div>
    </section>
  );
}
