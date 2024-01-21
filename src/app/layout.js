import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Udoh Abasi",
  description:
    "Udoh Abasi Porfolio Site. A fullstack developer, experienced with Django and React.",
  author: "Udoh Abasi",
  openGraph: {
    title: "Udoh Abasi",
    description: "Udoh Abasi Porfolio Site",
    type: "website",
    url: "https://www.udohabasi.com",
    image: "https://www.udohabasi.com/profilePicture-no-bg-small.webp",
    imageAlt: "Udoh Abasi",
    alt: "Udoh Abasi",
  },
};

// NOTE: The metadata 'color-scheme', "theme-color", etc, are NOT supported to be exported as a 'metadata' object. So, we can only export them as a 'viewport' object.
export const viewport = {
  // So, the code below will add '<meta name="color-scheme" content="light dark" />' to our <head> tag
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressRegion: "NG",
    streetAddress: "Nigeria",
  },

  email: "mailto:udoh.abasi.s@gmail.com",
  image: "https://www.udohabasi.com/profilePicture-no-bg-small.webp",
  jobTitle: "Fullstack web developer in Abuja, Nigeria",
  name: "Udoh Abasi",
  telephone: "(234) 814-262-2350",
  url: "https://www.udohabasi.com",
  award: "Employee of the Year Award in 2022 and 2023",
  gender: "male",
  sameAs: "https://www.udohabasi.com",
  description:
    "Udoh Abasi is a fullstack web developer with over 3 years experience with proficiency in Django, React, NextJS, NodeJS, based in Abuja Nigeria.",

  workPerformed: [
    {
      "@type": "CreativeWork",
      name: "Udohs Platform. A site where you can make a blog post and read other articles by other users",
      sameAs: "https://udohsplatform.udohabasi.com",
    },
    {
      "@type": "CreativeWork",
      name: "Udohs clothing. An e-commerce site where you can purchase nice clothes. You can add as many items as you wish to the cart and checkout as guest.",
      sameAs: "https://udohsclothing.vercel.app/",
    },
  ],

  hasOccupation: {
    "@type": "Occupation",
    name: "Fullstack web developer",
    educationRequirements:
      "BSc in Zoology, Skilled in Django, React, NextJS, NodeJS",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}{" "}
        <Toaster
          position="top-right"
          containerStyle={{
            // Make the toast appear farther down (somewhere in the middle)
            top: 200,
            left: 20,
            bottom: 20,
            right: 20,
          }}
          toastOptions={{
            // When the toast appears, it stays for 5 seconds before disappearing
            duration: 5000,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
