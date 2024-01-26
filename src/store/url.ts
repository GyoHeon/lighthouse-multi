import { create } from "zustand";

type TUrlData = {
  url: string;
  id: string;
};

type TUrlState = {
  urlList: TUrlData[];
};
type TUrlAction = {
  addUrl: (newUrl: string) => void;
  deleteUrl: (id: string) => void;
};

export const storeUrl = create<TUrlState & TUrlAction>((set) => ({
  urlList: [],
  addUrl: (newUrl) => {
    const newId = crypto.randomUUID();
    const newUrlData = { url: newUrl, id: newId };

    set((state) => ({ urlList: [...state.urlList, newUrlData] }));
  },
  deleteUrl: (id) => {
    set((state) => ({
      urlList: state.urlList.filter((item) => item.id !== id),
    }));
  },
}));
