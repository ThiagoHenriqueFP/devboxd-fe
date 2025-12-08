import { SessionProviderWrapper } from "@/config/SessionProvider";
import "./globals.css"; // Make sure you have this file
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ContextWrapper } from "@/context/ContextWrapper";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";

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
  const token = getCookie("access_token");
  function getUserFromServer() {
    if (!token || typeof token !== "string") return null;

    try {
      const decoded = jwtDecode<{ sub: string; id: number; email: string }>(
        token
      );

      return {
        id: decoded.id,
        username: decoded.sub,
        email: decoded.email,
      };
    } catch (e) {
      return null;
    }
  }

  const user = getUserFromServer();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextWrapper user={user}>
          <ToastContainer />
          <SessionProviderWrapper>{children}</SessionProviderWrapper>
        </ContextWrapper>
      </body>
    </html>
  );
}
