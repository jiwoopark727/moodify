import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moodify',
  description: 'Music made by Mood',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex justify-center items-center'>{children}</body>
    </html>
  );
}
