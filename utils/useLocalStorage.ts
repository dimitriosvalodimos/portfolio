import create from "zustand";
import { LocalStorageStore } from "@utils/commonProps";

const useLocalStorage = create<LocalStorageStore>((set) => ({
  allowLocalStorageAccess: false,
  changeAccess: (to) => {
    set((state) => ({ allowLocalStorageAccess: to }));
  },
}));

export { useLocalStorage };
