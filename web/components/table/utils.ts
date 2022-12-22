export const groupNucleicPairs = (sequence: string) => {
  const groups: string[][] = [];

  sequence.split("").reduce<string[]>((acc, char, index) => {
    if (!acc.length) {
      return [char];
    }  else if (acc[0] === char) {
      acc.push(char);
      return acc;
    } else {
      groups.push(acc);
      return [char];
    }
  }, []);

  return groups;
};
