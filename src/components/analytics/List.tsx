import { storeUrl } from "@/store/url";

export const List = () => {
  const { urlList, addUrl, deleteUrl } = storeUrl();

  const deleteText = (id: string) => {
    deleteUrl(id);
  };

  return (
    <ol className="flex flex-col gap-2">
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
    </ol>
  );
};
