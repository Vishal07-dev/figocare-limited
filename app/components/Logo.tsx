import Image from "next/image";

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
  const dimensions = {
    sm: { width: 160, height: 50 },
    md: { width: 210, height: 65 },
    lg: { width: 265, height: 83 },
  };

  const src = variant === "white" ? "/logo-footer.svg" : "/logo-navbar.svg";
  const { width, height } = dimensions[size];

  return (
    <div className="group transition-all duration-300">
      <Image
        src={src}
        alt="FIGO CARE"
        width={width}
        height={height}
        priority
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
