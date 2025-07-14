import type { Metadata } from 'next';
import './globals.css';
import './lib/fontawesome';

export const metadata: Metadata = {
  title: {
    template: '%s | Moodify',
    default: 'Moodify',
  },
  description: 'Music made by Mood',
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
