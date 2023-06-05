import { useState, useRef } from "react";
import "./CustomCombobox.css";
import { useOutside } from "../helpers";

export const CustomCombobox = () => {
  const inputRef = useRef(null);
  const imageRef = useRef(null);

  const [searchElement, setSearchElement] = useState("");
  const data = ["🍎 Apple", "🍌 Banana", "🫐 Blueberry", "🥭 Mango"];

  const { isInFocus: isInputInFocus } = useOutside(inputRef);
  const { isInFocus: isImageInFocus } = useOutside(imageRef);

  return (
    <>
      <div className="customCombobox">
        <div className="comboboxInputRow">
          <input
            ref={inputRef}
            type="text"
            placeholder="Choose a fruit:"
            className="comboboxInput p-8"
          />

          <img
            ref={imageRef}
            src="src/assets/icons8-down-24.png"
            alt="down"
            style={{ width: "10px", height: "7px", padding: "13px" }}
          />
        </div>

        {isInputInFocus || isImageInFocus ? (
          <div className="datalist p-8">
            {data.map((element, index) => (
              <div key={index}>{element}</div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
