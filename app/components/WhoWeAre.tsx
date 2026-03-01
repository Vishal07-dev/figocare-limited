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
    title: "Compassionate Care",
    description: "We prioritize empathy and kindness in every staffing decision we make.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Trusted Professionals",
    description: "Our rigorous vetting ensures only the most reliable staff join our team.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Responsive Service",
    description: "Available 24/7 to meet your staffing needs, whenever they arise.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white" aria-labelledby="who-we-are-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 id="who-we-are-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At FIGO CARE LTD, we are committed to providing skilled, compassionate, 
            and reliable healthcare professionals across the UK. Our mission is to 
            enhance patient care, ensure service continuity, and exceed regulatory 
            standards by connecting care homes, hospitals, and healthcare centres 
            with trusted staff. We believe great care starts with great people—and 
            we&apos;re here to deliver both.
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
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
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
