"use client";

import { storeUrl } from "@/store/url";
import { useState } from "react";

export const Input = () => {
  const [text, setText] = useState("");
  const { urlList, setUrlList } = storeUrl();

  const addText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;

    setUrlList([...urlList, text]);
    setText("");
  };

  const deleteText = (index: number) => {
    const newList = urlList.filter((_, i) => i !== index);

    setUrlList(newList);
  };

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="w-1/2">
      <form
        onSubmit={addText}
        className="flex gap-4 mb-6 border border-blue-400 rounded-md"
      >
        <input
          value={text}
          onChange={handleText}
          placeholder="Enter url!"
          className="w-full p-2 rounded-md"
        />
        <button className="m-2 px-3 border-l">Add</button>
      </form>

      <ul className="flex flex-col gap-2">
        {urlList.map((item, index) => (
          <li
            key={index}
            className="flex justify-between border border-slate-700 rounded-md p-2"
          >
            {item}
            <button onClick={() => deleteText(index)} className="pl-2 border-l">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
