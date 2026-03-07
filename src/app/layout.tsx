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
  metadataBase: new URL("https://desaiclasses.com"),
  title: "Desai Classes Pune | Best JEE NEET MHT-CET Coaching | Karve Nagar Since 1990",
  description:
    "Desai Classes – Top JEE, NEET & MHT-CET coaching in Karve Nagar, Pune. Expert faculty for 11th & 12th Science & Commerce since 1990. IIT Madras, IIT Indore selections. 99.9 percentile toppers. 4.9★ Google rating, 35+ years of excellence. Office No 231, Kakade Plaza, NDA Road.",
  keywords: [
    // High-volume (Google Keyword Planner)
    "neet classes in pune",
    "jee classes in pune",
    "best neet classes in pune",
    "best classes for neet in pune",
    "cet classes in pune",
    "mh cet classes in pune",
    "neet coaching in pune",
    "best cet classes in pune",
    "best jee coaching in pune",
    "iit classes in pune",
    "iit jee classes in pune",
    "iit coaching in pune",
    "best iit coaching in pune",
    "best jee classes in pune",
    "jee coaching in pune",
    "mht cet classes pune",
    "jee coaching classes in pune",
    "neet coaching classes in pune",
    "jee neet classes in pune",
    "best coaching classes in pune for 11th and 12th science",
    "best coaching classes for 11th and 12th science in pune",
    "best mht cet classes in pune",
    "12th science classes in pune",
    "11th science classes in pune",
    "neet academy in pune",
    "best iit jee coaching in pune",
    "top neet classes in pune",
    "top jee classes in pune",
    "cet crash course pune",
    "best coaching for jee in pune",
    "best coaching for neet in pune",
    // Brand & Location
    "Desai Classes Pune",
    "Desai Classes Karve Nagar",
    "coaching classes Karve Nagar Pune",
    "coaching classes NDA Road Pune",
    "best coaching classes Pune",
    "11th 12th coaching Pune",
    "science coaching Karve Nagar",
    "commerce coaching Pune",
    "HSC coaching Pune",
    "board exam preparation Pune",
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
    title: "Desai Classes Pune | Best JEE NEET MHT-CET Coaching | Karve Nagar Since 1990",
    description:
      "Top JEE, NEET & MHT-CET coaching in Karve Nagar, Pune since 1990. IIT & NIT selections, 99.9 percentile toppers. 4.9★ Google rating, 35+ years of excellence.",
    url: "https://desaiclasses.com",
    siteName: "Desai Classes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desai Classes - Best JEE NEET MHT-CET Coaching in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ClassesDes92890",
    creator: "@ClassesDes92890",
    title: "Desai Classes Pune | Best JEE NEET MHT-CET Coaching | Karve Nagar Since 1990",
    description:
      "Top JEE, NEET & MHT-CET coaching in Pune since 1990. IIT selections, 99.9 percentile toppers. 4.9★ rated. Karve Nagar, Pune.",
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
    canonical: "https://desaiclasses.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Desai Classes",
  description:
    "Top-rated coaching institute for JEE, NEET, MHT-CET, and 11th & 12th Science & Commerce in Karve Nagar, Pune since 1990. IIT Madras, IIT Indore selections. 99.9 percentile toppers.",
  url: "https://desaiclasses.com",
  telephone: "+919822598294",
  email: "desaiclasses@gmail.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No 231, 2nd Floor, Kakade Plaza, Opposite to Kakade City, NDA Road",
    addressLocality: "Karvenagar",
    addressRegion: "Maharashtra",
    postalCode: "411052",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4868648,
    longitude: 73.8126759,
  },
  hasMap: "https://share.google/AeZRPQdhZ689WTW7M",
  foundingDate: "1990",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "210",
    bestRating: "5",
  },
  knowsAbout: [
    "JEE Preparation",
    "NEET Preparation",
    "MHT-CET Coaching",
    "11th 12th Science",
    "11th 12th Commerce",
    "HSC Board Exam Preparation",
    "Physics Chemistry Maths Biology",
    "Accounts Economics",
  ],
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
  sameAs: [
    "https://x.com/ClassesDes92890",
    "https://share.google/AeZRPQdhZ689WTW7M",
  ],
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
        <meta name="geo.placename" content="Karve Nagar, Pune" />
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
