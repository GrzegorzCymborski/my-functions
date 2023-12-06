import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My-Functions',
  description: 'AiDevs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl'>
      <body>{children}</body>
    </html>
  );
}
