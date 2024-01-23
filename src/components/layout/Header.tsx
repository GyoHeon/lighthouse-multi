import { HEADER_MENU } from "@/constants/menu";
import Link from "next/link";

export const Header = () => (
  <header className="flex items-center h-16 px-6 border-b">
    <nav className="flex gap-6 ml-auto">
      {HEADER_MENU.map(({ title, url }) => (
        <Link key={title} href={url}>
          {title}
        </Link>
      ))}
    </nav>
  </header>
);
