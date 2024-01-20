import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Udoh Abasi",
  description: "Udoh Abasi Porfolio Site",
  author: "Udoh Abasi",
};

// NOTE: The metadata 'color-scheme', "theme-color", etc, are NOT supported to be exported as a 'metadata' object. So, we can only export them as a 'viewport' object.
export const viewport = {
  // So, the code below will add '<meta name="color-scheme" content="light dark" />' to our <head> tag
  colorScheme: "light dark",
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
      </body>
    </html>
  );
}
