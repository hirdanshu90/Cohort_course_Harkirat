/* eslint-disable no-undef */
import { createContext } from "react";

// This is the teleportar. Can use or make as many as needed.
// Anyone who wants to use it, should be wrapped inside the "provider".
export const CountContext = createContext({
  count: 0,
  setCount: () => {},
});
