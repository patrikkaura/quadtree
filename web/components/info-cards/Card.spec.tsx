import { render } from "@testing-library/react";

import { Card, Props } from "./Card";

describe("Card", () => {
  let props: Props = {
    header: "header",
    content: "random-content",
    width: 200,
    color: "#000000",
  };

  it("should render", () => {
    const { container } = render(<Card {...props} />);
    expect(container).toMatchSnapshot();
  });
});
