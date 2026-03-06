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
    description: "RGNs and RMNs holding validated qualifications and hands-on clinical expertise",
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Senior Carers & Healthcare Assistants",
    description: "Skilled HCAs delivering frontline patient and resident support",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Support Workers",
    description: "Committed professionals managing complex and specialist care requirements",
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Allied Health Professionals",
    description: "Qualified practitioners spanning diverse therapeutic and clinical disciplines",
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10" />,
    title: "Catering Assistants",
    description: "Nutrition and food service experts for clinical and care environments",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Cleaners",
    description: "Infection control and hygiene specialists upholding healthcare standards",
  },
];

export default function WhoWeProvide() {
  return (
    <section className="py-24 bg-gray-50" aria-labelledby="who-we-provide-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="who-we-provide-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Divisions
          </h2>
          <p className="text-gray-600 text-lg">
            We pair your organisation with dependable healthcare talent across these key positions:
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
