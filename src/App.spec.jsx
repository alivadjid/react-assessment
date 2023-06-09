import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("exist", () => {
    const { container } = render(<App />);

    expect(container.querySelector(".app")).toBeDefined();
  });
});
