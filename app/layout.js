// app/layout.js
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Aayush Hospital',
  description: 'Quality healthcare services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}