import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress, ScrollToTop, ToastProvider } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIGO CARE LTD | Premier Healthcare Staffing Agency in the UK",
  description:
    "Figo Care is a specialist UK healthcare recruitment agency that places qualified nurses, carers, and allied health professionals into hospitals, care homes, and NHS trusts nationwide.",
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
    title: "FIGO CARE LTD | Premier Healthcare Staffing Agency in the UK",
    description:
      "Specialist UK healthcare recruitment agency placing qualified nurses and carers into hospitals and care homes nationwide.",
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
    title: "FIGO CARE LTD | Premier Healthcare Staffing Agency in the UK",
    description:
      "Specialist UK healthcare recruitment agency. Nurses, carers & allied health professionals for NHS trusts and private providers.",
    images: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://figocare.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FIGO CARE LTD",
              url: "https://figocare.co.uk",
              logo: "https://figocare.co.uk/logo.png",
              description:
                "Specialist UK healthcare recruitment agency placing qualified nurses, carers, and allied health professionals into hospitals, care homes, and NHS trusts nationwide.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "128 City Road",
                addressLocality: "London",
                postalCode: "EC1V 2NX",
                addressCountry: "GB",
              },
              telephone: "+442081294836",
              email: "info@figocare.co.uk",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+442081294836",
                contactType: "customer service",
                availableLanguage: "English",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <ScrollProgress />
          {children}
          <ScrollToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
