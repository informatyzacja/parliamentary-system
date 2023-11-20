import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'System Parlamentarny',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
