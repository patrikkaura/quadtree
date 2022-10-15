import { makePrediction } from "./makePrediction";
import { sequenceConvertor } from "./sequenceConvertor";

describe("makePrediction", () => {
  it("should return a prediction", () => {
    const convertedSequence = sequenceConvertor(
      "ATATATGGGGGGTATATTTAGGGGGTATATTAGGGGGTATATATATGGGGGGTATA"
    );
    const threshold = 0.1;

    expect(makePrediction(convertedSequence, threshold)).toEqual([
      { index: 0, score: 0.9998830812236932 },
      { index: 1, score: 0.9999348783284366 },
      { index: 2, score: 0.9999620017943516 },
      { index: 3, score: 0.9999658340726023 },
      { index: 4, score: 0.9999664223196721 },
      { index: 5, score: 0.999958111988156 },
    ]);
  });

  it("should return an empty predictions for sequence without quadruplexes", () => {
    const convertedSequence = sequenceConvertor(
      "ATATATATATATATTATATTTAATATATATATATATTATATTTAATATATATATATAT"
    );
    const threshold = 0.1;

    expect(makePrediction(convertedSequence, threshold)).toEqual([]);
  });

  it("should return an empty predictions for threshold too high", () => {
    const convertedSequence = sequenceConvertor(
      "ATATATGGGGGGTATATTTAGGGGGTATATTAGGGGGTATATATATGGGGGGTATA"
    );
    const threshold = 1;

    expect(makePrediction(convertedSequence, threshold)).toEqual([]);
  });
});
