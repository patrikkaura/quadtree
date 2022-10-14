import { render, screen } from "@testing-library/react";

import { Dashboard } from "./Dashboard";

jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

jest.mock("@utils/trpc", () => ({
  trpc: {
    quadtree: {
      useMutation: jest.fn().mockImplementation(() => ({
        data: {
          intervals: [[1, 10]],
          results: [
            {
              index: 0,
              sequence: "at",
              interval: [1, 10],
              meanScore: 0.5,
              scores: [0.4],
            },
          ],
          stats: {
            sequenceLength: 30,
            frequencyPerThousand: 1,
            numberOfQuadruplexes: 1,
            gcCount: 10,
          },
        },
        isLoading: false,
        isSuccess: true,
      })),
    },
  },
}));

describe("Dashboard", () => {
  it("should match snapshot", async () => {
    const { container } = render(<Dashboard />);

    expect(await screen.findByTestId("sequence-0")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
