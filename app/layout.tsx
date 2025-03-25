import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'View & Respond to Your Agreement',
  description:
    'You’ve been invited to review and respond to a new agreement. Click to view the full details and submit your response.',

  openGraph: {
    title: 'View & Respond to Your Agreement',
    description:
      'You’ve been invited to review and respond to a new agreement. Click to view the full details and submit your response.',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'View & Respond to Your Agreement',
    description:
      'You’ve been invited to review and respond to a new agreement. Click to view the full details and submit your response.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
