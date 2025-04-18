import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/main/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeSwitch from '@/components/sub/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from "react-hot-toast";
import Footer from '@/components/main/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Aji Langit | Frontend Developer & Web Animation Enthusiast',
  description: 'Official portfolio of Adam Aji Langit — a passionate Frontend Developer specializing in Javascript, Typescript, React, Next.js, GSAP, and Framer Motion. Explore my work, experience at PT. Humanika Mitra Solusi and PT. Minilemon Nusantara, and projects built with dynamic, responsive web animations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html >
  )
}
