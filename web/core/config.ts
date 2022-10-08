export enum Constants {
  FIXED_WINDOW_SIZE = 50,
  MINIMUM_SEQUENCE_LENGTH = 50,
  MAXIMUM_SEQUENCE_LENGTH = 10000,
  MINIMUM_THRESHOLD = 0,
  MAXIMUM_THRESHOLD = 1,
}

export const DEFAULT_SEQUENCE =
  "ATTAATACTTTTAACAATTGTAGTATATAAAAAAGGGAGTAACCGAAAACGGTCGGGACCGAAAACGGTGTATATAAAAGATGTGAGAAACACACCACAATACTATGGCGCGCTTTGAGGATCCAACACGGCGACCCTACAAGCTACCTGATCTGTGCACGGAACTGAACACTTCACTGCAAGACATAGAAATAACCTGTGTATATTGCAAGACAGTATTGGAACTTACAGAGGTATTTGAATTTGCATTTAAAGATTTATTTGTGGTGTATAGAGACAGTATACCCCATGCTGCATGCCATAAATGTATAGATTTTTATTCTAGAATTAGAGAATTAAGACATTATTCAGACTCTGTGTATGGAGACACATTGGAAAAACTAACTAACACTGGGTTATACAATTTATTAATAAGGTGCCTGCGGTGCCAGAAACCGTTGAATCCAGCAGAAAAACTTAGACACCTTAATGAAAAACGACGATTTCACAACATAGCTGGGCACTATAGAGGCCAGTGCCATTCGTGCTGCAACCGAGCACGACAGGAACGACTCCAACGACGCAGAGAAACACAAGTATAATATTAAGTATGCATGGACCTAAGGCAACATTGCAAGACATTGTATTGCATTTAGAGCCCCAAAATGAAATTCCGGTTGACCTTCTATGTCACGAGCAATTAAGCGACTCAGAGGAAGAAAACGATGAAATAGATGGAGTTAATCATCAACATTTACCAGCCCGACGAGCCGAACCACAACGTCACACAATGTTGTGTATGTGTTGTAAGTGTGAAGCCAGAATTGAGCTAGTAGTAGAAAGCTCAGCAGACGACCTTCGAGCATTCCAGCAGCTGTTTCTGAACACCCTGTCCTTTGTGTGTCCGTGGTGTGCATCCCAGCAGTAAGCAACAATGGCTGATCCAGAAGGTACAGACGGGGAGGGCACGGGTTGTAACGGCTGGTTTTATGTACAAGCTATTGTAGACAAAAAAACAGGAGATGTAATATCAGATGACGAGGACGAAAATGCAACAGACACAGGGTCGGATATGGTAGATTTTATTGATACACAAGGAACATTTTGTGAACAGGCAGAGCTAGAGACAGCACAGGCATTGTTCCATGCGCAGGAGGTCCACAATGATGCACAAGTGTTGCATGTTTTAAAACGAAAGTTTGCAGGAGGCAGCACAGAAAACAGTCCATTAGGGGAGCGGCTGGAGGTGGATACAGAGTTAAGTCCACGGTTACAAGAAATATCTTTAAATAGTGGGCAGAAAAAGGCAAAAAGGCGGCTGTTTACAATATCAGATAGTGGCTATGGCTGTTCTGAAGTGGAAGCAACACAGATTCAGGTAACTACAAATGGCGAACATGGCGGCAATGTATGTAGTGGCGGCAGTACGGAGGCTATAGACAACGGGGGCACAGAGGGCAACAACAGCAGTGTAGACGGTACAAGTGACAATAGCAATATAGAAAATGTAAATCCACAATGTACCATAGCACAATTAAAAGACTTGTTAAAAGTAAACAATAAACAAGGAGCTATGTTAGCAGTATTTAAAGACACATATGGGCTATCATTTACAGATTTAGTTAGAAATTTTAAAAGTGATAAAACCACGTGTACAGATTGGGTTACAGCTATATTTGGAGTAAACCCAACAATAGCAGAAGGATTTAAAACACTAATACAGCCATTTATATTATATGCCCATATTCAATGTCTAGACTGTAAATGGGGAGTATTAATATTAGCCCTGTTGCGTTACAAATGTGGTAAGAGTAGACTAACAGTTGCTAAAGGTTTAAGTACGTTGTTACACGTACCTGAAACTTGTATGTTAATTCAACCACCAAAATTGCGAAGTAGTGTTGCAGCACTATATTGGTATAGAACAGGAATATCAAATATTAGTGAAGTAATGGGAGACACACCTGAGTGGATACAAAGACTTACTATTATACAACATGGAATAGATGATAGCAATTTTGATTTGTCAGAAATGGTACAATGGGCATTTGATAATGAGCTGACAGATGAAAGCGATATGGCATTTGAATATGCCTTATTAGCAGACAGCAACAGCAATGCAGCTGCCTTTTTAAAAAGCAATTGCCAAGCTAAATATTTAAAAGATTGTGCCACAATGTGCAAACATTATAGGCGAGCCCAAAAACGACAAATGAATATGTCACAGTGGATACGATTTAGATGTTCAAAAATAGATGAAGGGGGAGATTGGAGACCAATAGTGCAATTCCTGCGATACCAACAAATAGAGTTTATAACATTTTTAGGAGCCTTAAAATCATTTTTAAAAGGAACCCCCAAAAAAAATTGTTTAGTATTTTGTGGACCAGCAAATACAGGAAAATCATATTTTGGAATGAGTTTTATACACTTTATACAAGGAGCAGTAATATCATTTGTGAATTCCACTAGTCATTTTTGGTTGGAACCGTTAACAGATACTAAGGTGGCCATGTTAGATGATGCAACGACCACGTGTTGGACATACTTTGATACCTATATGAGAAATGCGTTAGATGGCAATCCAATAAGTATTGATAGAAAGCACAAACCATTAATACAACTAAAATGTCCTCCAATACTACTAACCACAAATATACATCCAGCAAAGGATAATAGATGGCCATATTTAGAAAGTAGAATAACAGTATTTGAATTTCCAAATGCATTTCCATTTGATAAAAATGGCAATCCAGTATATGAAATAAATGACAAAAATTGGAAATGTTTTTTTGAAAGGACATGGTCCAGATTAGATTTGCACGAGGAAGAGGAAGATGCAGACACCGAAGGAAACCCTTTCGGAACGTTTAAGTTGCGTGCAGGACAAAATCATAGACCACTATGAAAATGACAGTAAAGACATAGACAGCCAAATACAGTATTGGCAACTAATACGTTGGGAAAATGCAATATTCTTTGCAGCAAGGGAACATGGCATACAGACATTAAACCACCAGGTGGTGCCAGCCTATAACATTTCAAAAAGTAAAGCACATAAAGCTATTGAACTGCAAATGGCCCTACAAGGCCTTGCACAAAGTCGATACAAAACCGAGGATTGGACACTGCAAGACACATGCGAGGAACTATGGAATACAGAACCTACTCACTGCTTTAAAAAAGGTGGCCAAACAGTACAAGTATATTTTGATGGCAACAAAGACAATTGTATGACCTATGTAGCATGGGACAGTGTGTATTATATGACTGATGCAGGAACATGGGACAAAACCGCTACCTGTGTAAGTCACAGGGGATTGTATTATGTAAAGGAAGGGTACAACACGTTTTATATAGAATTTAAAAGTGAATGTGAAAAATATGGGAACACAGGTACGTGGGAAGTACATTTTGGGAATAATGTAATTGATTGTAATGACTCTATGTGCAGTACCAGTGACGACACGGTATCCGCTACTCAGCTTGTTAAACAGCTACAGCACACCCCCTCACCGTATTCCAGCACCGTGTCCGTGGGCACCGCAAAGACCTACGGCCAGACGTCGGCTGCTACACGACCTGGACACTGTGGACTCGCGGAGAAGCAGCATTGTGGACCTGTCAACCCACTTCTCGGTGCAGCTACACCTACAGGCAACAACAAAAGACGGAAACTCTGTAGTGGTAACACTACGCCTATAATACATTTAAAAGGTGACAGAAACAGTTTAAAATGTTTACGGTACAGATTGCGAAAACATAGCGACCACTATAGAGATATATCATCCACCTGGCATTGGACAGGTGCAGGCAATGAAAAAACAGGAATACTGACTGTAACATACCATAGTGAAACACAAAGAACAAAATTTTTAAATACTGTTGCAATTCCAGATAGTGTACAAATATTGGTGGGATACATGACAATGTAATACATATGCTGTAGTACCAATATGTTATCACTTATTTTTTTATTTTGCTTTTGTGTATGCATGTATGTGTGCTGCCATGTCCCGCTTTTGCCATCTGTCTGTATGTGTGCGTATGCATGGGTATTGGTATTTGTGTATATTGTGGTAATAACGTCCCCTGCCACAGCATTCACAGTATATGTATTTTGTTTTTTATTGCCCATGTTACTATTGCATATACATGCTATATTGTCTTTACAGTAATTGTATAGGTTGTTTTATACAGTGTATTGTACATTGTATATTTTGTTTTATACCTTTTATGCTTTTTGTATTTTTGTAATAAAAGTATGGTATCCCACCGTGCCGCACGACGCAAACGGGCTTCGGTAACTGACTTATATAAAACATGTAAACAATCTGGTACATGTCCACCTGATGTTGTTCCTAAGGTGGAGGGCACCACGTTAGCAGATAAAATATTGCAATGGTCAAGCCTTGGTATATTTTTGGGTGGACTTGGCATAGGTACTGGCAGTGGTACAGGGGGTCGTACAGGGTACATTCCATTGGGTGGGCGTTCCAATACAGTGGTGGATGTTGGTCCTACACGTCCCCCAGTGGTTATTGAACCTGTGGGCCCCACAGACCCATCTATTGTTACATTAATAGAGGACTCCAGTGTGGTTACATCAGGTGCACCTAGGCCTACGTTTACTGGCACGTCTGGGTTTGATATAACATCTGCGGGTACAACTACACCTGCGGTTTTGGATATCACACCTTCGTCTACCTCTGTGTCTATTTCCACAACCAATTTTACCAATCCTGCATTTTCTGATCCGTCCATTATTGAAGTTCCACAAACTGGGGAGGTGGCAGGTAATGTATTTGTTGGTACCCCTACATCTGGAACACATGGGTATGAGGAAATACCTTTACAAACATTTGCTTCTTCTGGTACGGGGGAGGAACCCATTAGTAGTACCCCATTGCCTACTGTGCGGCGTGTAGCAGGTCCCCGCCTTTACAGTAGGGCCTACCAACAAGTGTCAGTGGCTAACCCTGAGTTTCTTACACGTCCATCCTCTTTAATTACATATGACAACCCGGCCTTTGAGCCTGTGGACACTACATTAACATTTGATCCTCGTAGTGATGTTCCTGATTCAGATTTTATGGATATTATCCGTCTACATAGGCCTGCTTTAACATCCAGGCGTGGGACTGTTCGCTTTAGTAGATTAGGTCAACGGGCAACTATGTTTACCCGCAGCGGTACACAAATAGGTGCTAGGGTTCACTTTTATCATGATATAAGTCCTATTGCACCTTCCCCAGAATATATTGAACTGCAGCCTTTAGTATCTGCCACGGAGGACAATGACTTGTTTGATATATATGCAGATGACATGGACCCTGCAGTGCCTGTACCATCGCGTTCTACTACCTCCTTTGCATTTTTTAAATATTCGCCCACTATATCTTCTGCCTCTTCCTATAGTAATGTAACGGTCCCTTTAACCTCCTCTTGGGATGTGCCTGTATACACGGGTCCTGATATTACATTACCATCTACTACCTCTGTATGGCCCATTGTATCACCCACGGCCCCTGCCTCTACACAGTATATTGGTATACATGGTACACATTATTATTTGTGGCCATTATATTATTTTATTCCTAAGAAACGTAAACGTGTTCCCTATTTTTTTGCAGATGGCTTTGTGGCGGCCTAGTGACAATACCGTATATCTTCCACCTCCTTCTGTGGCAAGAGTTGTAAATACCGATGATTATGTGACTCCCACAAGCATATTTTATCATGCTGGCAGCTCTAGATTATTAACTGTTGGTAATCCATATTTTAGGGTTCCTGCAGGTGGTGGCAATAAGCAGGATATTCCTAAGGTTTCTGCATACCAATATAGAGTATTTAGGGTGCAGTTACCTGACCCAAATAAATTTGGTTTACCTGATACTAGTATTTATAATCCTGAAACACAACGTTTAGTGTGGGCCTGTGCTGGAGTGGAAATTGGCCGTGGTCAGCCTTTAGGTGTTGGCCTTAGTGGGCATCCATTTTATAATAAATTAGATGACACTGAAAGTTCCCATGCCGCCACGTCTAATGTTTCTGAGGACGTTAGGGACAATGTGTCTGTAGATTATAAGCAGACACAGTTATGTATTTTGGGCTGTGCCCCTGCTATTGGGGAACACTGGGCTAAAGGCACTGCTTGTAAATCGCGTCCTTTATCACAGGGCGATTGCCCCCCTTTAGAACTTAAAAACACAGTTTTGGAAGATGGTGATATGGTAGATACTGGATATGGTGCCATGGACTTTAGTACATTGCAAGATACTAAATGTGAGGTACCATTGGATATTTGTCAGTCTATTTGTAAATATCCTGATTATTTACAAATGTCTGCAGATCCTTATGGGGATTCCATGTTTTTTTGCTTACGGCGTGAGCAGCTTTTTGCTAGGCATTTTTGGAATAGAGCAGGTACTATGGGTGACACTGTGCCTCAATCCTTATATATTAAAGGCACAGGTATGCCTGCTTCACCTGGCAGCTGTGTGTATTCTCCCTCTCCAAGTGGCTCTATTGTTACCTCTGACTCCCAGTTGTTTAATAAACCATATTGGTTACATAAGGCACAGGGTCATAACAATGGTGTTTGCTGGCATAATCAATTATTTGTTACTGTGGTAGATACCACTCCCAGTACCAATTTAACAATATGTGCTTCTACACAGTCTCCTGTACCTGGGCAATATGATGCTACCAAATTTAAGCAGTATAGCAGACATGTTGAGGAATATGATTTGCAGTTTATTTTTCAGTTGTGTACTATTACTTTAACTGCAGATGTTATGTCCTATATTCATAGTATGAATAGCAGTATTTTAGAGGATTGGAACTTTGGTGTTCCCCCCCCCCCAACTACTAGTTTGGTGGATACATATCGTTTTGTACAATCTGTTGCTATTACCTGTCAAAAGGATGCTGCACCGGCTGAAAATAAGGATCCCTATGATAAGTTAAAGTTTTGGAATGTGGATTTAAAGGAAAAGTTTTCTTTAGACTTAGATCAATATCCCCTTGGACGTAAATTTTTGGTTCAGGCTGGATTGCGTCGCAAGCCCACCATAGGCCCTCGCAAACGTTCTGCTCCATCTGCCACTACGTCTTCTAAACCTGCCAAGCGTGTGCGTGTACGTGCCAGGAAGTAATATGTGTGTGTGTATATATATATACATCTATTGTTGTGTTTGTATGTCCTGTGTTTGTGTTTGTTGTATGATTGCATTGTATGGTATGTATGGTTGTTGTTGTATGTTGTATGTTACTATATTTGTTGGTATGTGGCATTAAATAAAATATGTTTTGTGGTTCTGTGTGTTATGTGGTTGCGCCCTAGTGAGTAACAACTGTATTTGTGTTTGTGGTATGGGTGTTGCTTGTTGGGCTATATATTGTCCTGTATTTCAAGTTATAAAACTGCACACCTTACAGCATCCATTTTATCCTACAATCCTCCATTTTGCTGTGCAACCGATTTCGGTTGCCTTTGGCTTATGTCTGTGGTTTTCTGCACAATACAGTACGCTGGCACTATTGCAAACTTTAATCTTTTGGGCACTGCTCCTACATATTTTGAACAATTGGCGCGCCTCTTTGGCGCATATAAGGCGCACCTGGTATTAGTCATTTTCCTGTCCAGGTGCGCTACAACAATTGCTTGCATAACTATATCCACTCCCTAAGTAATAAAACTGCTTTTAGGCACATATTTTAGTTTGTTTTTACTTAAGCTAATTGCATACTTGGCTTGTACAACTACTTTCATGTCCAACATTCTGTCTACCCTTAACATGAACTATAATATGACTAAGCTGTGCATACATAGTTTATGCAACCGAAATAGGTTGGGCAGCACATACTATACTTTTC";