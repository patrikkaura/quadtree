export function calculateGcCount(sequence: string) {
  const gcCount = sequence
    .split("")
    .filter((nucleotide) => nucleotide === "G" || nucleotide === "C").length;

  return ((gcCount * 100) / sequence.length).toFixed(2);
}
