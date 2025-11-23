import type { Metadata } from 'next';
import {
  Raleway,
  Roboto,
  VT323,
  Pixelify_Sans,
  Audiowide,
  Tektur,
  Quicksand,
} from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import SidebarNav from '@/components/SidebarNav';
import TopNav from '@/components/TopNav';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import FloatingControls from '@/components/FloatingControls';
import { ThemeProvider } from '@/context/ThemeContext';

const header = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const body = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['500', '700'],
});

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const vt323 = VT323({
  variable: '--font-vt323',
  subsets: ['latin'],
  weight: ['400'],
});

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const audiowide = Audiowide({
  variable: '--font-audiowide',
  subsets: ['latin'],
  weight: ['400'],
});

const tektur = Tektur({
  variable: '--font-tektur',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jonathanmaskew.com'),
  title: {
    default: 'Jonathan Maskew - Software Engineer',
    template: '%s | Jonathan Maskew',
  },
  description:
    'Detail-oriented Software Engineer focused on user-driven front-end web development.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  openGraph: {
    title: "Hi, I'm Jonathan Maskew",
    description:
      'Detail-oriented Software Engineer focused on user-driven front-end web development.',
    url: 'https://jonathanmaskew.com',
    siteName: 'Jonathan Maskew',
    images: [
      {
        url: '/Js_poster.png',
        alt: 'Jonathan Maskew — Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hi, I'm Jonathan Maskew",
    description:
      'Detail-oriented Software Engineer focused on user-driven front-end web development.',
    images: ['/Js_poster.png'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'Ui9PXDl4GQbYOlMPLL7cUtDZiy52akc2r89cEBumOZQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="ld-person" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Jonathan Maskew',
            url: 'https://jonathanmaskew.com',
            image: 'https://jonathanmaskew.com/Js_poster.png',
            jobTitle: 'Software Engineer',
            description:
              'Detail-oriented Software Engineer focused on user-driven front-end web development.',
            sameAs: [
              'http://www.linkedin.com/in/jonathan-maskew',
              'https://jonathanmaskew.com',
            ],
            worksFor: [{ '@type': 'Organization', name: 'myhELO' }],
            alumniOf: [
              {
                '@type': 'CollegeOrUniversity',
                name: 'Purdue University',
                url: 'https://www.purdue.edu',
              },
            ],
          })}
        </Script>
      </head>
      <body
        className={`${header.variable} ${body.variable} ${quicksand.variable} ${vt323.variable} ${pixelifySans.variable} ${audiowide.variable} ${tektur.variable} antialiased flex min-h-screen md:h-screen`}
        style={{ fontFamily: 'var(--font-body), sans-serif' }}
      >
        <ThemeProvider>
          <div className="hidden md:block">
            <SidebarNav />
          </div>

          <div className="block md:hidden">
            <TopNav />
          </div>
          <main
            data-scroll-container
            className="flex-1 min-w-0 overflow-y-visible md:overflow-y-auto pt-14 md:pt-0 pb-12 md:pb-20"
          >
            {children}
          </main>

          <FloatingControls />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
