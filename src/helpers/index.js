import { useEffect, useState } from "react";

export function useOutside(ref) {
  const [isInFocus, setIsInFocus] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsInFocus(false);
        console.log("no-focus");
      } else {
        setIsInFocus(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isInFocus };
}

export function removeEmoji(text) {
  return text.replace(/\p{Emoji}/u, "");
}
