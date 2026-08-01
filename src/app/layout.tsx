import { Work_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import ViewTransitions from '@/components/ViewTransitions';
import './globals.css';

const workSans = Work_Sans({
  weight: ['200', '700'],
  subsets: ['latin'],
  variable: '--font-worksans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sutangrafik.com'),
  title: 'Sutan Grafik | Diseinu grafikoa',
  description:
    'DISEINU GRAFIKOA - IRUDIA - MAKETAZIOA - MERCHANDISING\n\nBeharrizanen araberako soluzio grafikoak\n\nLogotipoak / Irudi korporatiboa / Kartelak / Flyerrak / Merchandising / Kamisetak / Diskak / Editoriala / Ilustrazio digitala / Argazki-muntaiak',
  openGraph: {
    siteName: 'SUTAN GRAFIK',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Sutan Grafik Diseño Grafico Diseinu grafikoa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={workSans.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div aria-hidden="true" className="site-background" />
        <ViewTransitions />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
