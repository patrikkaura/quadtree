export function getRange(start: number, end: number, step: number) {
  return Array.from(
    { length: (end - start) / step + 1 },
    (_, i) => start + i * step
  );
}

export function getGraphScale(sequenceLength: number) {
  if (sequenceLength < 1000) {
    return 10;
  } else if (sequenceLength < 2500) {
    return 100;
  }
  return 250;
}
