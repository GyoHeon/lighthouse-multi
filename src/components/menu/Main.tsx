"use client";

import { Card } from "@/components/card";
import { MAIN_MENU } from "@/constants/menu";
import { storeUrl } from "@/store/url";

export const Main = () => {
  const { urlList } = storeUrl();

  if (urlList.length) {
    return <></>;
  }

  return (
    <div className="mb-32 flex flex-col gap-3 justify-evenly text-center lg:flex-row lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
      {MAIN_MENU.map((item) => (
        <Card.Menu key={item.title} {...item} />
      ))}
    </div>
  );
};
