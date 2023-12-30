import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import React from 'react';
import Nav from "@/components/nav";
import "@/styles/global.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Brick-ly",
  description: "Brickly is a crowdfunding protocol built on polygon.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/navbar/BricklyIcon.svg" />
      </head>
      <body className=" font-sans antialiased overflow-x-hidden h-[calc(100dvh)]">
        <Theme>
            
        <Nav />
      <main className="flex min-h-screen flex-col py-16 px-12 grow">{children}</main>
              <footer className="p-8 text-center h-72 bg-orange-50 ">
                <div className="flex gap-10">
                  <img  src="/navbar/Brickly.svg" width="100"/>
                  <div className="flex">
                    <div className="flex flex-col gap-y-2">
              
                    </div>
                  </div>
                </div>
                <div>&copy; 2024 Brick-ly</div>
              </footer>
              </Theme>

      </body>
    </html>
  )
}