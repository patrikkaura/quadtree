import { render } from "@testing-library/react";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("should match snapshot for success", () => {
    const { container } = render(<Alert foundResults={true} />);

    expect(container).toMatchSnapshot();
  });

  it("should match snapshot for failure", () => {
    const { container } = render(<Alert foundResults={false} />);

    expect(container).toMatchSnapshot();
  });
});
