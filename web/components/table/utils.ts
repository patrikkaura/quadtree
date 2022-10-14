export const groupNucleicPairs = (sequence: string) => {
  const groups: string[][] = [];

  sequence.split("").reduce<string[]>((acc, char, index) => {
    debugger;

    if (!acc.length) {
      return [char];
    } else if (index === sequence.length - 1) {
      acc.push(char);
      groups.push(acc);
      return [];
    } else if (acc[0] === char) {
      acc.push(char);
      return acc;
    } else {
      groups.push(acc);
      return [char];
    }
  }, []);

  return groups;
};
