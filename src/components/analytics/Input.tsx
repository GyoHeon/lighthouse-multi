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
    <div>
      <form onSubmit={addText}>
        <input value={text} onChange={handleText} />
      </form>

      <ul>
        {urlList.map((item, index) => (
          <li key={index} className="flex gap-2">
            {item}
            <button className="" onClick={() => deleteText(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
