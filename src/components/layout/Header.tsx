import { HEADER_MENU } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="border-b">
    <nav className="max-w-5xl flex gap-6 items-center h-16 mx-auto px-6">
      <Link className="flex gap-3 items-center mr-auto" href="/">
        <Image alt="Lighthouse multi" height={40} src="/light.png" width={40} />
        <span className="invisible lg:visible">Lighthouse multi</span>
      </Link>

      {HEADER_MENU.map(({ title, url }) => (
        <Link key={title} href={url}>
          {title}
        </Link>
      ))}
    </nav>
  </header>
);
