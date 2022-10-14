import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Props, Table } from "./Table";

describe("Table", () => {
  let props: Props = {
    data: [
      {
        index: 0,
        interval: [0, 1],
        length: 999,
        meanScore: 0.2,
        scores: [0.1, 0.2, 0.3],
        sequence: "AATATAGGGGTATA",
      },
      {
        index: 1,
        interval: [10, 11],
        length: 10,
        meanScore: 0.5,
        scores: [0.1, 0.2, 0.3],
        sequence: "AATGGATAGGGGTATA",
      },
    ],
  };

  it("should render", async () => {
    const { container } = render(<Table {...props} />);

    expect(await screen.findByTestId("sequence-0")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
