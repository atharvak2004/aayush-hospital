// app/layout.js

import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Aayush Hospital',
  description: 'Quality healthcare services',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}) {
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