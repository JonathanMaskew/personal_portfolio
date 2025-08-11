import type { Metadata } from 'next';
import { Raleway, Quicksand } from 'next/font/google';
import './globals.css';
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
  title: 'Jonathan Maskew',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${header.variable} ${body.variable} font-body antialiased flex h-screen scroll-smooth`}
      >
        <div className="hidden md:block">
          <SidebarNav />
        </div>

        <div className="block md:hidden">
          <TopNav />
        </div>
        <main className="flex-1 overflow-y-auto snap-y snap-mandatory pt-14 md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
