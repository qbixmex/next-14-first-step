import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
        <nav className="flex justify-end gap-4 p-6">
          <p><a className="text-blue-400 font-bold hover:text-blue-600" href="/">Home</a></p>
          <p><a className="hover:text-blue-600" href="/about">About</a></p>
        </nav>
        {children}
      </body>
    </html>
  );
}
