import Image from "next/image";

interface RoleCardProps {
  image: string;
  title: string;
  description: string;
  requirements: string[];
}

const roles: RoleCardProps[] = [
  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    title: "Registered Nurses",
    description:
      "We place qualified RGN, RMN, and RNLD nurses across NHS hospitals, private healthcare facilities, and care homes throughout the UK.",
    requirements: ["NMC Registration", "Valid DBS", "Right to Work in UK"],
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    title: "Care Assistants",
    description:
      "Dedicated healthcare assistants providing essential patient care, personal support, and daily living assistance in various care settings.",
    requirements: ["Care Certificate", "Manual Handling Training", "References"],
  },
  {
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop",
    title: "Support Workers",
    description:
      "Compassionate support workers specialising in mental health, learning disabilities, and community care services across the United Kingdom.",
    requirements: ["Relevant Experience", "Enhanced DBS", "Training Certificates"],
  },
  {
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop",
    title: "Clinical Leads",
    description:
      "Experienced clinical leaders and senior nurses to oversee care delivery, mentor junior staff, and ensure compliance with CQC standards.",
    requirements: ["Management Experience", "Clinical Expertise", "Leadership Skills"],
  },
];

function RoleCard({ image, title, description, requirements }: RoleCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={`${title} jobs UK - FIGO CARE healthcare recruitment`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="space-y-2">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-gray-700">{req}</span>
            </div>
          ))}
        </div>
        <a
          href="/Contact"
          className="inline-block mt-6 text-primary font-semibold hover:text-primary-dark transition-colors"
        >
          Learn More →
        </a>
      </div>
    </article>
  );
}

export default function Roles() {
  return (
    <section id="roles" className="py-24 bg-white" aria-labelledby="roles-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Healthcare Roles
          </span>
          <h2 id="roles-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Specialist Healthcare Roles We Recruit
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you are a healthcare provider seeking qualified staff or a 
            professional looking for your next opportunity, we specialise in 
            placing talent across these key healthcare roles.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <RoleCard key={index} {...role} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can&apos;t find your role listed? We recruit for many other healthcare 
            positions.
          </p>
          <a
            href="/Contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
