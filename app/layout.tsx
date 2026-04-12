import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Social media dashboard',
  description:
    'Displays mock follower counts, engagement metrics, and daily stats across multiple social platforms, with a toggleable dark/light mode.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground ">{children}</body>
    </html>
  );
}
