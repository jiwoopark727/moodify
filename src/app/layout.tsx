import type { Metadata } from 'next';
import './globals.css';
import './lib/fontawesome';

export const metadata: Metadata = {
  title: {
    template: '%s | Moodify',
    default: 'Moodify',
  },
  description: 'Music made by Mood',
  icons: {
    icon: '/icons/icon_192.png',
    apple: '/icons/icon_192.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
