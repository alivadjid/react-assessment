import { useEffect, useState } from "react";

export function useOutsideAlerter(ref) {
  const [isInFocus, setIsInFocus] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsInFocus(false);
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
