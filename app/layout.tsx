import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });
import { Navbar } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next 14',
  description: 'Next.js 14 with Tailwind and TypeScript',
};

type Props = { children: ReactNode };

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
