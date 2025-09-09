import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { ClientOnly } from '@/components/client-only';
import { FloatingDock } from '@/components/ui/floating-dock';
import { InteractiveCursor } from '@/components/ui/interactive-cursor';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Europlast - Quality Plastic Solutions from Kosovo',
    template: '%s | Europlast'
  },
  description: 'Since 2005, Europlast has been providing premium plastic packaging solutions including shrink foil, black foil, and industrial bags from Kosovo.',
  keywords: ['plastic packaging', 'shrink foil', 'industrial bags', 'Kosovo plastic', 'food packaging'],
  authors: [{ name: 'Europlast' }],
  creator: 'Europlast',
  publisher: 'Europlast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://europlast.eu',
    siteName: 'Europlast',
    title: 'Europlast - Quality Plastic Solutions from Kosovo',
    description: 'Since 2005, premium plastic packaging solutions from Kosovo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Europlast - Quality Plastic Solutions',
    description: 'Since 2005, premium plastic packaging solutions from Kosovo.',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-background">
            <ClientOnly>
              <ScrollProgress />
              <InteractiveCursor />
            </ClientOnly>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <ClientOnly>
              <FloatingDock />
            </ClientOnly>
          </div>
          <ClientOnly>
            <Toaster />
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}