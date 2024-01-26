"use client";

import { storeUrl } from "@/store/url";
import { useState } from "react";

export const Input = () => {
  const [url, setUrl] = useState("");
  const { urlList, addUrl, deleteUrl } = storeUrl();

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
    setUrl("");
  };

  const deleteText = (id: string) => {
    deleteUrl(id);
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="w-1/2">
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

      <ul className="flex flex-col gap-2">
        {urlList.map(({ url, id }) => (
          <li
            key={id}
            className="flex justify-between border border-slate-700 rounded-md p-2"
          >
            {url}
            <button onClick={() => deleteText(id)} className="pl-2 border-l">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {urlList.length > 0 && (
        <button className="block m-2 mx-auto p-1 px-2 border border-rose-400 rounded-md">
          Analytics
        </button>
      )}
    </div>
  );
};
