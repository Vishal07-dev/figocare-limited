interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({
  variant = "default",
  size = "md",
  showTagline = false,
}: LogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg", tagline: "text-xs" },
    md: { icon: "w-10 h-10", text: "text-2xl", tagline: "text-xs" },
    lg: { icon: "w-14 h-14", text: "text-3xl", tagline: "text-sm" },
  };

  const colors = {
    default: {
      primary: "text-primary",
      secondary: "text-gray-900",
      tagline: "text-gray-500",
    },
    white: {
      primary: "text-primary",
      secondary: "text-white",
      tagline: "text-white/70",
    },
  };

  return (
    <div className="group flex items-center gap-3 transition-all duration-300">
      {/* Geometric Icon Mark */}
      <div
        className={`${sizes[size].icon} relative flex items-center justify-center`}
      >
        {/* Abstract geometric shape - interconnected elements representing care & connection */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r="22"
            className="fill-primary"
          />
          
          {/* Abstract 'F' letterform with modern geometric style */}
          <path
            d="M16 14H32C33.1 14 34 14.9 34 16V18C34 19.1 33.1 20 32 20H20V22H28C29.1 22 30 22.9 30 24V26C30 27.1 29.1 28 28 28H20V32C20 33.1 19.1 34 18 34H16C14.9 34 14 33.1 14 32V16C14 14.9 14.9 14 16 14Z"
            className="fill-white"
          />
          
          {/* Accent dot - representing care/focus */}
          <circle
            cx="36"
            cy="36"
            r="4"
            className="fill-white/80"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className={`${sizes[size].text} font-bold tracking-tight leading-none`}>
          <span className={colors[variant].primary}>FIGO</span>
          <span className={colors[variant].secondary}> CARE</span>
        </div>
        {showTagline && (
          <span className={`${sizes[size].tagline} ${colors[variant].tagline} font-medium tracking-wider uppercase mt-0.5`}>
            Healthcare Staffing
          </span>
        )}
      </div>
    </div>
  );
}
