import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Future World',
  description: 'Future World Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <Link href="/">Home</Link> | <Link href="/store/">Store</Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
