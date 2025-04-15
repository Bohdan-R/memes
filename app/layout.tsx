"use client";
import { HeroUIProvider } from "@heroui/react";

import "../styles/globals.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body>
        <HeroUIProvider>
          <Navbar />
          <main className="max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] mx-auto px-6 md:px-0">
            {children}
          </main>
        </HeroUIProvider>
      </body>
    </html>
  );
}
