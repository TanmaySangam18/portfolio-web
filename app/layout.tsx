import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanmaysangam.vercel.app"),
  title: "Tanmay Sangam — Product Designer. Engineer. Product Manager.",
  description:
    "Product designer, engineer, and product manager. I design the product, build it, ship it, and run it. Live products, MBTA-pitched case studies, 588 solo commits. MS Project Management @ Northeastern '26. Open to Product Design, Software Engineering, and Product/Program Management roles.",
  openGraph: {
    title: "Tanmay Sangam — Product Designer. Engineer. Product Manager.",
    description: "Design it. Build it. Ship it. Run it. Product design + engineering + PM.",
    url: "https://tanmaysangam.vercel.app",
    siteName: "Tanmay Sangam",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${spaceGrotesk.variable}`}>
      <body style={{ minHeight: "100vh" }}>{children}</body>
    </html>
  );
}
