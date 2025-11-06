import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OnChainWallet",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen h-full bg-[#121214] text-white overflow-y-auto grid grid-cols-2">
      <aside>
        <span>aqui sera um icone do caraio</span>
      </aside>
      <main className="flex min-h-screen flex-col justify-start lg:justify-center items-center col-span-2 lg:col-span-1">
        {children}
      </main>
    </div>
  );
}
