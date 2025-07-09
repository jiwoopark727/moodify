import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '트랙 | Moodify',
  description: 'Music made by Mood',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
