import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Providers from '@/components/ThemeProvider';


export const metadata: Metadata = {
  title: 'Scholar',
  description: 'An event listing web application',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
            <Navbar />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <Footer />
        </Providers>
        
      </body>
    </html>
  )
}
