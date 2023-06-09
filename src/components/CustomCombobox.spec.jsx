import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { CustomCombobox } from "./CustomCombobox";

const setup = () => {
  const { container } = render(<CustomCombobox />);
  const input = container.querySelector('[data-test="custom-combobox-input"]');

  return {
    container,
    input,
  };
};

describe("CustomCombobox", () => {
  it("exist", async () => {
    render(<CustomCombobox />);

    expect(screen.findByText("customCombobox")).toBeDefined();
  });

  it("shows datalist on input click, filter datalist on input change, change input value on listItem click and hide datalist", () => {
    const { container, input } = setup();

    fireEvent.click(input);

    expect(
      container.querySelector(`[data-test="custom-combobox-datalist"]`)
    ).toBeEnabled();

    fireEvent.change(input, { target: { value: "blue" } });

    expect(container.querySelectorAll(".listItem").length).toBe(1);

    fireEvent.click(container.querySelector(".listItem"));

    expect(input.value).toBe("Blueberry");

    expect(
      container.querySelector(`[data-test="custom-combobox-datalist"]`)
    ).toBeNull();
  });
});
