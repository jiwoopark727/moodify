import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playlist',
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
