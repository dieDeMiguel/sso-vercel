import './global.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Protección de deployments en Vercel · Plan Pro',
    template: '%s · Deployment Protection',
  },
  description:
    'Seis alternativas para proteger deployments de Vercel en plan Pro, comparadas con precios reales y trade-offs.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`dark dark-theme ${GeistSans.variable} ${GeistMono.variable} font-sans antialiased [color-scheme:dark] scroll-smooth`}
      style={{ overflowX: 'clip' }}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background-100 text-gray-1000" style={{ overflowX: 'clip' }}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
