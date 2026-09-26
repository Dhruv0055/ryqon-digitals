import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ryqondigitals.com"),
  title: {
    default: "Ryqon Digitals | Build Better. Market Smarter. Grow Faster.",
    template: "%s | Ryqon Digitals",
  },
  description:
    "Ryqon Digitals is a full-stack digital product engineering and performance marketing agency in Hyderabad. We build custom web apps, iOS & Android mobile apps, and scalable acquisition engines.",
  keywords: [
    "Ryqon Digitals",
    "Web Development Company Hyderabad",
    "Mobile App Development",
    "Flutter App Agency",
    "React Native Development",
    "Performance Marketing Agency",
    "Custom SaaS Development",
    "Next.js Development",
    "Meta Ads Management",
    "Google Ads Hyderabad",
    "Digital Product Studio",
  ],
  authors: [{ name: "Ryqon Digitals", url: "https://www.ryqondigitals.com" }],
  creator: "Ryqon Digitals",
  publisher: "Ryqon Digitals",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ryqondigitals.com",
    siteName: "Ryqon Digitals",
    title: "Ryqon Digitals | Digital Solutions for Growth",
    description:
      "We Build Products That Get Results — From Web & Mobile Applications to Marketing Growth.",
    images: [
      {
        url: "/logo-dark.png",
        width: 1024,
        height: 1024,
        alt: "Ryqon Digitals Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryqon Digitals | Build Better. Market Smarter.",
    description:
      "Web, Mobile Apps & High-ROI Marketing Solutions for Brands and Startups.",
    images: ["/logo-dark.png"],
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Complete Valid Schema.org markup fixing empty fields from previous site
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ryqon Digitals",
    "alternateName": "Ryqon Digital Solutions",
    "image": "https://www.ryqondigitals.com/logo-dark.png",
    "@id": "https://www.ryqondigitals.com",
    "url": "https://www.ryqondigitals.com",
    "telephone": "+919000155767",
    "email": "ryqonservices@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.385044,
      "longitude": 78.486671,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "09:00",
        "closes": "18:00",
      },
    ],
    "sameAs": [
      "https://www.instagram.com/ryqon_digital/reels/?hl=en",
      "https://www.facebook.com/profile.php?id=61587584260076",
      "https://www.linkedin.com/company/ryqon-services/",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Product Engineering & Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Application Development",
            "description": "Next.js, React, Node.js full-stack scalable web applications.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cross-Platform Mobile App Development",
            "description": "Native performance iOS and Android applications via Flutter & React Native.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing & Paid Ads",
            "description": "High-conversion Meta Ads and Google Ads campaigns.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </head>
      <body className="bg-[#f7fafe] text-slate-900 antialiased min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
