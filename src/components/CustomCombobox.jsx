import { useState, useRef } from "react";
import "./CustomCombobox.css";
import { useOutside, removeEmoji } from "../helpers";

export const CustomCombobox = () => {
  const inputRef = useRef(null);
  const imageRef = useRef(null);

  const [searchElement, setSearchElement] = useState("");
  const data = ["🍎 Apple", "🍌 Banana", "🫐 Blueberry", "🥭 Mango"];

  const { isInFocus: isInputInFocus } = useOutside(inputRef);
  const { isInFocus: isImageInFocus } = useOutside(imageRef);
  const isElementInFocus = isInputInFocus || isImageInFocus;

  return (
    <>
      <div className="customCombobox">
        <div
          className={
            "comboboxInputRow " +
            (isElementInFocus ? "comboboxInputBorder" : "")
          }
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Choose a Fruit:"
            className="comboboxInput ml-8 pl-8"
            style={{
              backgroundColor: isElementInFocus ? "" : "var(--color-gray)",
            }}
            value={searchElement}
            onChange={(e) => setSearchElement(e.target.value)}
          />

          <img
            ref={imageRef}
            src="src/assets/icons8-down-24.png"
            alt="down"
            style={{
              width: "10px",
              height: "7px",
              padding: "13px",
              backgroundColor: isElementInFocus ? "" : "var(--color-gray)",
            }}
          />
        </div>

        {isElementInFocus ? (
          <div className="datalist">
            {data
              .filter((element) =>
                element.toLowerCase().includes(searchElement.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="listItem p-8"
                  onClick={() => setSearchElement(removeEmoji(item))}
                >
                  {item}
                </div>
              ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
