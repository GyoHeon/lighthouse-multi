import { create } from "zustand";

type TUrl = {
  urlList: string[];
  setUrlList: (urlList: string[]) => void;
};

export const storeUrl = create<TUrl>((set) => ({
  urlList: [],
  setUrlList: (urlList) => set({ urlList }),
}));
