import { Card } from "@/components/card";
import { MENU } from "@/constants/menu";
import Image from "next/image";

export default function Home() {
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

      <div className="mb-32 flex flex-col gap-3 justify-evenly text-center lg:flex-row lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        {MENU.map((item) => (
          <Card.Menu key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
