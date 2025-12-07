import { SessionProviderWrapper } from "@/config/SessionProvider";
import "./globals.css"; // Make sure you have this file
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { de } from "zod/locales";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Auth App Router Example",
  description: "Authentication with Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <div> 
            <Header />
            {children}
          </div>
          </SessionProviderWrapper>
      </body>
    </html>
  );
}
