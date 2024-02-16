import type { Metadata } from 'next'
import {Lato} from 'next/font/google'
import './(site)/globals.css'
import {NextFont} from "next/dist/compiled/@next/font";
import StoreProvider from "@/redux/storeProvider";

const lato: NextFont = Lato({ weight: ['400', '700', '900'], subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'SeoApp',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
