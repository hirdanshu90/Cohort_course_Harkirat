import { selector } from "recoil";
import { countAtom } from "../atoms/count";

// This depends on countAtom state. Now we can use this with the help of "key" name.
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0;
  },
});
