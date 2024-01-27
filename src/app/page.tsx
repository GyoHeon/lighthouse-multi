import { Analytics } from "@/components/analytics";
import { Menu } from "@/components/menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-between h-full p-24">
      <Image
        className="relative"
        src="/light.png"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <h1>Lighthouse Multi</h1>

      <Analytics.Input />

      <Menu.Main />
    </main>
  );
}
