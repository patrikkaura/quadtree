import { render } from "@testing-library/react";

import { Props, SequenceGraph } from "./SequenceGraph";
import { getGraphScale, getRange } from "./utils";

jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

jest.mock("./utils");

const mockedGetGraphScale = jest
  .mocked(getGraphScale)
  .mockImplementation(() => 10);
const mockedGetRange = jest
  .mocked(getRange)
  .mockImplementation(() => [0, 1, 2, 3, 4, 5]);

describe("SequenceGraph", () => {
  let props: Props = {
    intervals: [
      [10, 20],
      [30, 40],
      [50, 60],
      [70, 80],
    ],
    length: 100,
  };

  it("should render", () => {
    const { container } = render(<SequenceGraph {...props} />);
    expect(container).toMatchSnapshot();

    expect(mockedGetRange).toHaveBeenCalledTimes(1);
    expect(mockedGetRange).toHaveBeenCalledWith(0, props.length, 10);

    expect(mockedGetGraphScale).toHaveBeenCalledWith(100);
    expect(mockedGetGraphScale).toHaveBeenCalledTimes(1);
  });
});
