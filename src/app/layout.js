
import "../styles/globals.css"; 
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { FixedSocialIcons } from "@/components/reusable/SocialIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zin Wai Aung | Portfolio",
  description:
    "Sleek and responsive personal portfolio built with Next.js and Tailwind.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-backgroundAll dark:text-Darksecondary-muted`}
      >
          <FixedSocialIcons />
          {/* ---- */}
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
