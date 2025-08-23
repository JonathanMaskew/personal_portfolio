import type { Metadata } from 'next';
import { Raleway, Quicksand } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import SidebarNav from '@/components/SidebarNav';
import TopNav from '@/components/TopNav';

const header = Raleway({
  variable: '--font-header',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const body = Quicksand({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jonathanmaskew.com'),
  title: {
    default: 'Jonathan Maskew - Software Engineer',
    template: '%s | Jonathan Maskew',
  },
  description:
    'Detail-oriented Software Engineer focused on user-driven front-end web development.',
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
        className={`${header.variable} ${body.variable} font-body antialiased flex h-screen`}
      >
        <div className="hidden md:block">
          <SidebarNav />
        </div>

        <div className="block md:hidden">
          <TopNav />
        </div>
        <main
          data-scroll-container
          className="flex-1 min-w-0 overflow-y-visible md:overflow-y-auto pt-14 md:pt-0"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
