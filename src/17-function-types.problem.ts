import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: Function) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused: boolean) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
