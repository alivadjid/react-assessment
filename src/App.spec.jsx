import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("shows CustomCombobox", () => {
    render(<App />);

    expect(screen.findByText("customCombobox")).toBeDefined();
  });
});
