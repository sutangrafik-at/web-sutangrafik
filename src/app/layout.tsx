import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sutan Grafik | Diseinu grafikoa',
  description: 'Sutan Grafik - Diseinu grafikoa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eu">
      <body>{children}</body>
    </html>
  );
}
