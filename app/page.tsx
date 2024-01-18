import { Card } from "@/components/card";
import { MENU } from "@/constants/menu";
import Image from "next/image";

export default function Home() {
  const menu =
    "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="relative"
        src="/light.png"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <h1>Lighthouse Multi</h1>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {MENU.map((item) => (
          <Card.Menu key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
