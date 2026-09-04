import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const siteUrl = "https://www.aayushhospitalpune.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Aayush Hospital | Quality Healthcare in Lohegaon, Pune",
    template: "%s | Aayush Hospital",
  },
  description:
    "Aayush Hospital and Aayush Advanced Physiotherapy Clinic in Lohegaon, Pune — compassionate, advanced medical care across orthopedics, surgery, physiotherapy, ozone therapy and more.",
  keywords: [
    // Brand
    "Aayush Hospital",
    "Aayush Hospital Pune",
    "Aayush advanced physiotherapy clinic",

    // Location-based
    "hospital in Lohegaon Pune",
    "best hospital in Lohegaon",
    "hospital near Wagholi",
    "hospital near Kharadi Pune",
    "multispeciality hospital Pune",
    "emergency hospital Lohegaon",

    // Physiotherapy & rehab
    "physiotherapy clinic Pune",
    "physiotherapy and rehabilitation Pune",
    "sports physiotherapy Pune",
    "neuro physiotherapy Pune",
    "geriatric physiotherapy Pune",
    "best physiotherapy clinic near me",

    // Orthopedics & spine
    "orthopedic hospital Pune",
    "orthopedic surgeon Lohegaon",
    "spine specialist Pune",
    "non surgical spine treatment Pune",
    "spinal decompression therapy Pune",

    // Surgery
    "general surgery hospital Pune",
    "laparoscopic surgery Pune",

    // Ozone / injection therapies
    "ozone therapy Pune",
    "DSCB injections Pune",
    "EBOO therapy Pune",
    "chelation therapy Pune",
    "pain management clinic Pune",

    // Proctology
    "proctology clinic Pune",
    "piles fissure fistula treatment Pune",
    "kshar sutra treatment Pune",

    // Ayurveda & homeopathy
    "ayurveda and homeopathy clinic Pune",
  ],
  authors: [{ name: "Aayush Hospital" }],
  applicationName: "Aayush Hospital",

  // Per-page metadata (in page.tsx / generateMetadata) should override this
  // with its own alternates.canonical set to that page's path.
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Aayush Hospital",
    title: "Aayush Hospital | Quality Healthcare in Lohegaon, Pune",
    description:
      "Compassionate, advanced medical care in Lohegaon, Pune — orthopedics, surgery, physiotherapy, ozone therapy and more.",
    images: [
      {
        url: "/Aayush_logo.png",
        width: 1200,
        height: 630,
        alt: "Aayush Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aayush Hospital | Quality Healthcare in Lohegaon, Pune",
    description:
      "Compassionate, advanced medical care in Lohegaon, Pune — orthopedics, surgery, physiotherapy, ozone therapy and more.",
    images: ["/Aayush_logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5a342b",
};

// Site-wide structured data. Tells Google you're a Hospital, with
// address/phone/hours/socials — feeds the knowledge panel and local search.
// (Address/phone/hours pulled from your Footer + GetInTouchSection content —
// update here if any of those ever change, they're currently duplicated.)
const hospitalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Aayush Hospital",
  alternateName: "Aayush Advanced Physiotherapy Clinic",
  url: siteUrl,
  logo: `${siteUrl}/Aayush_logo.png`,
  image: `${siteUrl}/Aayush_logo.png`,
  telephone: "+91-9970766313",
  email: "aayushhospitalpune@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Samruddhi Prime, Wagholi Rd, Maria Udyan Area, Dadaji Vasti, Lohegaon",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411047",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/aayushhospital_pune/",
    "https://www.youtube.com/@aayushhospitalpune",
    "https://wa.me/919970766313",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9970766313",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  // Mirrors the OPD Timings shown in the Footer — update both together
  // if hours ever change.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "18:00",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
        />
        <Toaster position="top-right" richColors />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}