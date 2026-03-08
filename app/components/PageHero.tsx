"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({ 
  title = "FIGO CARE",
  subtitle = "Delivering Trusted Healthcare Professionals Across the UK",
  image = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
}: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[30vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={`${title} - ${subtitle}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              {title.includes(",") ? (
                <>
                  <span className="text-primary">{title.split(",")[0]},</span>
                  <br />
                  <span>{title.split(",")[1]}</span>
                </>
              ) : (
                <span>{title}</span>
              )}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
