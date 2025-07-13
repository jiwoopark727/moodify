import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '플레이리스트',
};

export default function PlaylistLayout({
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
