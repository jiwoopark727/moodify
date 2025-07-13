import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '타임라인',
};

export default function TimelineLayout({
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
