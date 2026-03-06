import Image from "next/image";
import { Heart, ShieldCheck, Clock } from "lucide-react";
import { ReactNode } from "react";

interface ValueProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const values: ValueProps[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "People-First Approach",
    description: "Every placement decision begins with genuine empathy and a deep respect for patient wellbeing.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Verified Excellence",
    description: "Thorough background screening and credential checks guarantee only top-tier professionals represent our agency.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Round-the-Clock Availability",
    description: "Our dedicated team operates day and night to address both emergency and scheduled workforce requirements.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white" aria-labelledby="who-we-are-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 id="who-we-are-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Figo Care, our driving force is transforming how healthcare organisations find and retain outstanding talent. Drawing on extensive industry knowledge, we recognise that placing the right professionals in the right roles is fundamental to delivering exceptional patient outcomes. We go beyond simple recruitment — we build lasting partnerships that empower both facilities and practitioners to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Values Grid */}
          <div className="grid gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-6 bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop"
              alt="Healthcare professionals collaborating - FIGO CARE team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
