import type { Metadata } from 'next';
import './globals.css';
import './lib/fontawesome';
import { poorStory } from './../app/lib/font';

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
      <body
        className={`flex justify-center items-center bg-black ${poorStory.className}`}
      >
        {children}
      </body>
    </html>
  );
}
