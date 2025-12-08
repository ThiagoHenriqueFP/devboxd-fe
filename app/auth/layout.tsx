import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/Version-control-rafiki.svg";
import { ContextWrapper } from "@/context/ContextWrapper";

export const metadata: Metadata = {
  title: "OnChainWallet",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen h-full bg-neutral-700 text-white overflow-y-auto grid grid-cols-2">
      <aside className="flex flex-col justify-center items-center">
        <Image src={logo} alt="Auth Image" className="max-w-full h-auto" />
      </aside>
      <main className="flex bg-neutral-800 min-h-screen flex-col justify-start lg:justify-center items-center col-span-2 lg:col-span-1">
        <ContextWrapper>{children}</ContextWrapper>
      </main>
    </div>
  );
}
