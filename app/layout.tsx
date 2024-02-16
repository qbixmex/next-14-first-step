import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 14",
  description: "Next.js 14 with Tailwind and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />   
        {children}
      </body>
    </html>
  );
}
