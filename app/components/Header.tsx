import { Input } from "./Input";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-700 px-6 py-4">
      <h1 className="text-2xl font-bold text-indigo-700">DevBoxd</h1>
      <div>
        <Input placeholder="Pesquisar" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm">João Banana</span>
        <div className="w-8 h-8 rounded-full bg-neutral-700" />
      </div>
    </header>
  );
}