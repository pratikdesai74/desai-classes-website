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
  metadataBase: new URL("https://desaiclasses.in"),
  title: "Desai Classes Pune | Best 11th & 12th Science & Commerce Coaching Since 1990",
  description:
    "Desai Classes Pune - Top-rated coaching institute for 11th & 12th Science & Commerce in Karve Nagar since 1990. Expert faculty, AC classrooms, smartboards, CET/JEE/NEET preparation. 4.8/5 rating, 35+ years of excellence. Enroll now!",
  keywords: [
    "Desai Classes Pune",
    "best coaching classes Pune",
    "11th 12th coaching Pune",
    "science coaching Karve Nagar",
    "commerce coaching Pune",
    "CET coaching Pune",
    "JEE coaching Pune",
    "NEET coaching Pune",
    "best tuition classes Pune",
    "Karve Nagar coaching",
    "HSC coaching Pune",
    "12th science tuition Pune",
    "11th science coaching Pune",
    "board exam preparation Pune",
    "MHT-CET coaching Pune",
    "physics chemistry maths tuition Pune",
    "accounts coaching Pune",
    "best classes for 11th 12th Pune",
    "coaching classes near me Pune",
    "top rated coaching Pune",
  ],
  authors: [{ name: "Desai Classes" }],
  creator: "Desai Classes",
  publisher: "Desai Classes",
  openGraph: {
    title: "Desai Classes Pune | Best 11th & 12th Coaching Since 1990",
    description:
      "Top-rated coaching institute for 11th & 12th Science & Commerce in Karve Nagar, Pune. 35+ years of excellence. Expert faculty, modern facilities.",
    url: "https://desaiclasses.in",
    siteName: "Desai Classes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desai Classes - Best Coaching for 11th & 12th in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desai Classes Pune | Best 11th & 12th Coaching Since 1990",
    description:
      "Top-rated coaching institute for 11th & 12th Science & Commerce in Pune. 35+ years of trust.",
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
  alternates: {
    canonical: "https://desaiclasses.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Desai Classes",
  description:
    "Top-rated coaching institute for 11th & 12th Science & Commerce in Pune since 1990.",
  url: "https://desaiclasses.in",
  telephone: "+91-20-XXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kakade Plaza, 2nd Floor, NDA Road, Opposite Kakade City",
    addressLocality: "Karve Nagar, Pune",
    addressRegion: "Maharashtra",
    postalCode: "411052",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4868648,
    longitude: 73.8126759,
  },
  foundingDate: "1990",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "210",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "21:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a3a5c" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.4868648;73.8126759" />
        <meta name="ICBM" content="18.4868648, 73.8126759" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
