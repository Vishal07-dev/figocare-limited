import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIGO CARE LTD | UK Healthcare Staffing & Recruitment Agency",
  description:
    "FIGO CARE LTD is a trusted UK healthcare recruitment agency providing qualified nurses, care assistants and healthcare professionals to hospitals, care homes and private healthcare providers across the United Kingdom.",
  keywords: [
    "UK healthcare staffing",
    "healthcare recruitment agency UK",
    "nurse recruitment UK",
    "care assistant jobs UK",
    "healthcare agency UK",
    "medical staffing solutions UK",
    "NHS staffing agency",
    "care home staffing",
    "hospital recruitment UK",
    "healthcare professionals UK",
  ],
  authors: [{ name: "FIGO CARE LTD" }],
  creator: "FIGO CARE LTD",
  publisher: "FIGO CARE LTD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://figocare.co.uk",
    siteName: "FIGO CARE LTD",
    title: "FIGO CARE LTD | UK Healthcare Staffing & Recruitment Agency",
    description:
      "Trusted UK healthcare recruitment agency connecting qualified nurses and care assistants with hospitals and care homes across the United Kingdom.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "FIGO CARE LTD - UK Healthcare Staffing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIGO CARE LTD | UK Healthcare Staffing & Recruitment Agency",
    description:
      "Trusted UK healthcare recruitment agency. Nurses, care assistants & healthcare professionals for NHS and private providers.",
    images: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://figocare.co.uk",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
