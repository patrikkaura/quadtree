import { render } from "@testing-library/react";

import { InfoCards, Props } from "./InfoCards";

describe("InfoCards", () => {
  let props: Props = {
    threshold: 0.5,
    stats: {
      sequenceLength: 100,
      frequencyPerThousand: "10",
      gcCount: "10",
      numberOfQuadruplexes: 5,
    },
  };

  it("should render", () => {
    const { container } = render(<InfoCards {...props} />);

    expect(container).toMatchSnapshot();
  });
});
