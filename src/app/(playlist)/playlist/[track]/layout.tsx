import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track',
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
