import { atom } from "recoil";

// Defined the state separately here. This has replaced the useState. 

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});
