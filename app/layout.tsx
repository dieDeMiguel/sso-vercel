import './global.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'SSO Vercel',
    template: '%s | SSO Vercel',
  },
  description: 'Single sign-on for Vercel',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark dark-theme ${GeistSans.variable} ${GeistMono.variable} font-sans antialiased [color-scheme:dark]`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background-100 text-gray-1000">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
