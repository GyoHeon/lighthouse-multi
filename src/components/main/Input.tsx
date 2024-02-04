"use client";

import { storeUrl } from "@/store/url";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Input = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const { urlList, addUrl } = storeUrl();

  const checkDuplicate = (url: string) => {
    return urlList.some((item) => item.url === url);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) return;

    const isDuplicate = checkDuplicate(url);
    if (isDuplicate) {
      alert("Duplicate url!");
      return;
    }

    addUrl(url);
    router.push("/analytics");
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 mb-6 border border-blue-400 rounded-md"
    >
      <input
        value={url}
        onChange={handleText}
        placeholder="Enter url!"
        className="w-full p-2 rounded-md"
      />
      <button className="m-2 px-3 border-l">Add</button>
    </form>
  );
};
