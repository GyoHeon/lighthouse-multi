"use client";

import { storeUrl } from "@/store/url";

export const Button = () => {
  const { urlList } = storeUrl();

  if (urlList.length === 0) {
    return <></>;
  }

  return (
    <button className="block m-2 mx-auto p-1 px-2 border border-rose-400 rounded-md">
      Analytics
    </button>
  );
};
