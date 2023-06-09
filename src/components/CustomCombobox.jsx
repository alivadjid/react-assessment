import { useState, useRef, useEffect } from "react";
import "./CustomCombobox.css";
import { removeEmoji } from "../helpers";

export const CustomCombobox = () => {
  const inputRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef(null);

  const [searchElement, setSearchElement] = useState("");
  const [isShowList, setIsShowList] = useState(false);
  const list = ["🍎 Apple", "🍌 Banana", "🫐 Blueberry", "🥭 Mango"];

  useEffect(() => {
    if (isShowList) {
      const handler = (event) => {
        if (
          !listRef.current?.contains(event.target) &&
          !inputRef.current?.contains(event.target) &&
          !imageRef.current?.contains(event.target)
        )
          setIsShowList(false);
      };
      document.addEventListener("mousedown", handler);
    }
  }, [isShowList]);

  function handleClick(item) {
    setSearchElement(removeEmoji(item));
    setIsShowList(false);
  }

  function listFilter() {
    return list.filter((element) =>
      element.toLowerCase().includes(searchElement.toLowerCase())
    );
  }

  return (
    <>
      <div className="customCombobox">
        <div
          className={
            "comboboxInputRow " + (isShowList ? "comboboxInputBorder" : "")
          }
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Choose a Fruit:"
            className="comboboxInput ml-8 pl-8"
            style={{
              backgroundColor: isShowList ? "" : "var(--color-gray)",
            }}
            data-test="custom-combobox-input"
            value={searchElement}
            onChange={(e) => setSearchElement(e.target.value)}
            onClick={() => setIsShowList(true)}
          />

          <img
            ref={imageRef}
            src="src/assets/icons8-down-24.png"
            alt="down"
            style={{
              width: "10px",
              height: "7px",
              padding: "13px",
              backgroundColor: isShowList ? "" : "var(--color-gray)",
            }}
            data-test="custom-combobox-img"
            onClick={() => setIsShowList(!isShowList)}
          />
        </div>

        {isShowList ? (
          <div
            ref={listRef}
            className="datalist"
            data-test="custom-combobox-datalist"
          >
            {listFilter().map((item, index) => (
              <div
                key={index}
                className="listItem p-8"
                onClick={() => handleClick(item)}
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
