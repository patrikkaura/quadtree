import { render } from "@testing-library/react";

import { Toolbar } from "./Toolbar";

describe("Toolbar", () => {
  it("should math snapshot", () => {
    const { container } = render(<Toolbar />);

    expect(container).toMatchSnapshot();
  });
});
