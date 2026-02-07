import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { AnalyticsProvider } from '@/components/providers/analytics-provider';

export const metadata: Metadata = {
  title: 'Ivan Bondar - Full-Stack Developer',
  description:
    'Full-Stack Developer with rich experience in building innovative web applications. Combining creativity with technical expertise to deliver cutting-edge solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Ivan Bondar - Full-Stack Developer</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <div className="min-h-screen">
          <Navigation />
          <AnalyticsProvider />
          {children}
        </div>
      </body>
    </html>
  );
}
