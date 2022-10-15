import { render } from "@testing-library/react";

import { Props, Sequence } from "./Sequence";

describe("Sequence", () => {
  let props: Props = {
    index: 0,
    sequence: "ATATATAGGGGGGTATATATAGGGTATACCCCC",
  };

  it("should render", () => {
    const { container } = render(<Sequence {...props} />);
    expect(container).toMatchSnapshot();
  });
});
