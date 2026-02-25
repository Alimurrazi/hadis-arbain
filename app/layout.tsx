import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ইমাম নববির চল্লিশ হাদিস | Hadis Arbain বাংলা",
  description: "ইমাম নববির চল্লিশ হাদিসের সম্পূর্ণ বাংলা অনুবাদ। Hadis Arbain in Bengali with explanation.",
  keywords: "হাদিস আরবাইন, চল্লিশ হাদিস, Imam Nawawi 40 Hadith Bengali, Hadis বাংলা",
  authors: [{ name: "Alimur Razi" }],
  robots: "index, follow",
  verification: {
    google: "KQ9Pk76W4VMXOV_meyntYI9or4m2Sn5qk0DYxTjLOXU",
  },
  openGraph: {
    title: "ইমাম নববির চল্লিশ হাদিস",
    description: "চল্লিশ হাদিসের বাংলা অনুবাদ।",
    url: "https://hadis-arbain.vercel.app/",
    type: "website",
    images: [{ url: "https://hadis-arbain.vercel.app/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${cormorantGaramond.variable} ${amiri.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('islamicWisdomTheme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
