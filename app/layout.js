import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Nestor Works | Premium Watches in Ambalangoda, Sri Lanka",
  description: "Sri Lanka's trusted watch store in Ambalangoda. Shop authentic Casio, Seiko, Titan, Citizen, Alba & more. Free shipping, warranties, and expert advice.",
  keywords: [
    "buy watches in Sri Lanka",
    "Casio watches Ambalangoda",
    "Seiko watches Sri Lanka",
    "Titan watches online",
    "Citizen, Alba timepieces",
    "luxury watches store",
    "Nestor Works watches",
  ],
  openGraph: {
    title: "Nestor Works | Premium Watches in Ambalangoda",
    description: "Authentic Casio, Seiko, Titan & more. Visit us in Ambalangoda or shop online.",
    url: "https://www.nestorworks.com",
    siteName: "Nestor Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nestor Works | Premium Watches in Sri Lanka",
    description: "Your trusted source for Casio, Seiko, Titan & more in Ambalangoda.",
  },
  alternates: {
    canonical: "https://www.nestorworks.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}