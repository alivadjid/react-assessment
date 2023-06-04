import "./CustomCombobox.css";
// import { mdiChevronDown } from "@mdi/js";

export const CustomCombobox = () => {
  const data = ["🍎 Apple", "🍌 Banana", "🫐 Blueberry", "🥭 Mango"];
  return (
    <>
      <div className="customCombobox">
        <div className="comboboxInputRow">
          <input
            type="text"
            placeholder="Choose a fruit:"
            className="comboboxInput"
          />
          <img
            src="src/assets/icons8-down-24.png"
            alt="down"
            style={{ width: "10px", height: "7px", padding: "13px" }}
          />
        </div>

        <div className="datalist">
          {data.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </div>
      </div>
    </>
  );
};
