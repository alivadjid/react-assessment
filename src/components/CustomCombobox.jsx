import { useState, useEffect, useRef } from "react";
import "./CustomCombobox.css";
// import { mdiChevronDown } from "@mdi/js";
import { useOutsideAlerter } from "../helpers";

export const CustomCombobox = () => {
  // const [isShowDataList, setIsShowDataList] = useState(true);
  const [searchElement, setSearchElement] = useState("");
  const data = ["🍎 Apple", "🍌 Banana", "🫐 Blueberry", "🥭 Mango"];

  const wrapperRef = useRef(null);
  const { isInFocus } = useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className="customCombobox">
        <div className="comboboxInputRow">
          <input
            ref={wrapperRef}
            type="text"
            placeholder="Choose a fruit:"
            className="comboboxInput p-8"
          />

          <img
            src="src/assets/icons8-down-24.png"
            alt="down"
            style={{ width: "10px", height: "7px", padding: "13px" }}
          />
        </div>

        {isInFocus ? (
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
