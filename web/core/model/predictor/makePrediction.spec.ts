import { makePrediction } from "./makePrediction";
import { sequenceConvertor } from "./sequenceConvertor";

jest.mock("./model", () => ({
  score: jest.fn().mockImplementation(() => 0.5),
}));

describe("makePrediction", () => {
  it("should return a prediction", () => {
    const convertedSequence = sequenceConvertor(
      "ATATATGGGGGGTATATTTAGGGGGTATATTAGGGGGTATATATATGGGGGGTATA"
    );
    const threshold = 0.1;

    expect(makePrediction(convertedSequence, threshold)).toEqual([]);
  });
});
