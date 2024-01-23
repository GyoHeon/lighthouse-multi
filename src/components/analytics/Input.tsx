import { useState } from "react";

export const Input = () => {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState<string[]>([]);

  const addText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;

    setTextList([...textList, text]);
    setText("");
  };

  const deleteText = (index: number) => {
    const newList = textList.filter((_, i) => i !== index);

    setTextList(newList);
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
        {textList.map((item, index) => (
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
