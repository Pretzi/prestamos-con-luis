import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import ModalProvider from '@/components/ModalProvider';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['italic'],
  variable: '--font-display-next',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body-next',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Los Préstamos con Luis — Financiamiento para empleados de gobierno',
  description:
    'Asesoría de crédito para empleados de gobierno, jubilados y pensionados de SEP, IMSS e ISSSTE. Revisión sin costo, sin anticipos. Luis Álvarez.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Los Préstamos con Luis',
  description: 'Asesoría y gestión de créditos para empleados del gobierno federal en México',
  provider: {
    '@type': 'Person',
    name: 'Luis Álvarez',
    jobTitle: 'Asesor de crédito',
  },
  areaServed: { '@type': 'Country', name: 'México' },
  serviceType: 'Asesoría de crédito',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3QW894VKHT"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3QW894VKHT');
        `}</Script>
      </body>
    </html>
  );
}
