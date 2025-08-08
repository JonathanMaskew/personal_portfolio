import type { Metadata } from 'next';
import { Raleway, Quicksand } from 'next/font/google';
import './globals.css';
import SidebarNav from '@/components/SidebarNav';

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
        className={`${header.variable} ${body.variable} font-body antialiased`}
      >
        <div className="flex h-screen">
          <SidebarNav />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
