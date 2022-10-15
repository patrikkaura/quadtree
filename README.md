<h1 align='center'> QUADTREE - guanine quadruplex prediction model</h1>
<br />
<div align="center">
    <img src="https://img.shields.io/badge/Quadtree v1.0.0-green?style=for-the-badge" alt='package_version'/>
    <img src="https://img.shields.io/badge/python 3.7+-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt='python_version'/>
</div>
<br />

The Quadtree is a gradient-boosted decision tree model used to predict guanine quadruplexes inside DNA sequences. It's developed on top of the LightGBM python library. Each sequence base is encoded based on a given encoding prescription. The model was trained to be used with a moving window and analyses the whole sequence.

## Requirements

- lightgbm==3.3.2
- numpy==1.21.2

## Install dependencies

Before using install the requirements:

```bash
  pip install -r requirements.txt
```

## Usage

Instantiate the model

```python
  from quadtree import Quadtree
  
  model = Quadtree()
```

Run analysis

- [x] insert sequence as a string
- [x] set threshold (recommended values is 0.2)
- [x] insert path to quadnet model

```python
result = quadtree.analyse(
    sequence='ATTAATACTTTTAACAATTGTAGTATATAAAAAAGGGAGTAACC...', 
    model_path='/path/to/quadnet_model.txt',', 
    score_threshold=0.1
)
```

Results are then returned in given form which can be  loaded into pandas DataFrame.

```python
import pandas as pd

df = pd.DataFrame(result)
```

|    |   index |   position | sequence                                                                                                                                                                                                                                                                      |   length |
|---:|--------:|-----------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------:|
|  0 |       0 |        907 | GCAACAATGGCTGATCCAGAAGGTACAGACGGGGAGGGCACGGGTTGTAACGGCTGGTTTTATGTACAAGCTATTGTAGACAAAAAAACAGGAGATGTAATATCA                                                                                                                                                                     |      105 |
|  1 |       1 |       1184 | GAGGCAGCACAGAAAACAGTCCATTAGGGGAGCGGCTGGAGGTGGATACAGAGTTAAGTCCACGGTTACAAGAAATATCTTTAAATAGTGGGCAGA                                                                                                                                                                              |       96 |
|  2 |       2 |       1389 | ATGTAGTGGCGGCAGTACGGAGGCTATAGACAACGGGGGCACAGAGGGCAACAACAGCAGTGTAGACGGTACAAGTGACAATAGCAATATAGAAAATGTAAATCCAC                                                                                                                                                                   |      107 |
|  3 |       3 |       1635 | AGATTGGGTTACAGCTATATTTGGAGTAAACCCAACAATAGCAGAAGGATTTAAAACACTAATACAGCCATTTAT                                                                                                                                                                                                   |       75 |
|  4 |       4 |       2229 | AATAGATGAAGGGGGAGATTGGAGACCAATAGTGCAATTCCTGCGATACCAACAAATAGAGTTTATAACATTTTTAG                                                                                                                                                                                                 |       77 |
|  5 |       5 |       2302 | TTAGGAGCCTTAAAATCATTTTTAAAAGGAACCCCCAAAAAAAATTGTTTAGTATTTTGTGGACCAGCAAATACAGGAAAAT                                                                                                                                                                                            |       82 |
|  6 |       6 |       3249 | CTGATGCAGGAACATGGGACAAAACCGCTACCTGTGTAAGTCACAGGGGATTGTATTATGTAAAGGAAGGGTACAACACGTT                                                                                                                                                                                            |       82 |
|  7 |       7 |       3344 | AAAAGTGAATGTGAAAAATATGGGAACACAGGTACGTGGGAAGTACATTTTGGGAATAATGTAATTGATTGTAATGACTCTATGTGCAGTACCA                                                                                                                                                                                |       94 |
|  8 |       8 |       3459 | CTCAGCTTGTTAAACAGCTACAGCACACCCCCTCACCGTATTCCAGCACCGTGTCCGTGGGCACCGCAAAGACCTACGGCCAGACGTCGGCTGCTACACG                                                                                                                                                                          |      100 |
|  9 |       9 |       3591 | ATTGTGGACCTGTCAACCCACTTCTCGGTGCAGCTACACCTACAGGCAACAACAAAAGACGGAAACTCTGTAGTG                                                                                                                                                                                                   |       75 |
| 10 |      10 |       4392 | TGGTATATTTTTGGGTGGACTTGGCATAGGTACTGGCAGTGGTACAGGGGGTCGTACAGGGTACATTCCATTGGGTGGGCGTTCCAATACAGTGGTGGATGTTGGTCCTACACGTCCCCCAGTGGTTATTGAACCTGTGGGCCCCACAGACCCATCTATTGTTACATTAATAGAGGACTCCAGTGTGGTTACATCAGGTGCACCTAGGC                                                             |      209 |
| 11 |      11 |       4734 | TCCGTCCATTATTGAAGTTCCACAAACTGGGGAGGTGGCAGGTAATGTATTTGTTGGTACCCCTACATCTGGAACACATGGGTATGAGGAAATACCTTTACAAACATTTGCTTCTTCTGGTACGGGGGAGGAACCCATTAGTAGTACCCCATTGCCTACTGTGCGGCGTGTAGCAGGTCCCCGCCTTTACAGTAGGGCCTACCAACAAGTGTCAGTGGCTAACCCTGAGTTTCTTACACGTCCATCCTCTTTAATTACATATGACAACC |      269 |
| 12 |      12 |       5160 | TACCCGCAGCGGTACACAAATAGGTGCTAGGGTTCACTTTTATCATGATATAAGTCCTATTGCACCTTCCCCAGA                                                                                                                                                                                                   |       75 |
| 13 |      13 |       5379 | TTCTGCCTCTTCCTATAGTAATGTAACGGTCCCTTTAACCTCCTCTTGGGATGTGCCTGTATACACGGGTCCTGATATTACATTACCATCTACTACCTCTGTATG                                                                                                                                                                     |      105 |
| 14 |      14 |       5477 | CTGTATGGCCCATTGTATCACCCACGGCCCCTGCCTCTACACAGTATATTGGTATACATGGTACACATTATTATTTGT                                                                                                                                                                                                |       78 |
| 15 |      15 |       5744 | GTTGGTAATCCATATTTTAGGGTTCCTGCAGGTGGTGGCAATAAGCAGGATATTCCTAAGGTTTCTGCATACCAATATAGAG                                                                                                                                                                                            |       82 |
| 16 |      16 |       6063 | ATAAGCAGACACAGTTATGTATTTTGGGCTGTGCCCCTGCTATTGGGGAACACTGGGCTAAAGGCACTGCTTGTAAATCGCGTCCTTTATCACAGGGCGATTGCCCCCCTTTAGAACTTAAAAACACAGTTTTGGAAGATGGTGATATGGTAGATACTGGATATGGTG                                                                                                      |      168 |
| 17 |      17 |       6458 | CCTGCTTCACCTGGCAGCTGTGTGTATTCTCCCTCTCCAAGTGGCTCTATTGTTACCTCTGACTCCCAGTTGTTTAATAAACCATATTGGTTACA                                                                                                                                                                               |       95 |
| 18 |      18 |       6789 | ATAGTATGAATAGCAGTATTTTAGAGGATTGGAACTTTGGTGTTCCCCCCCCCCCAACTACTAGTTTGGTGGATACATATCGTTTTGTACAATCTGTTGCTATTACCTGTCAAAAGGATGCTGC                                                                                                                                                  |      124 |


## Authors

* **Patrik Kaura** - *Main developer* - [patrikkaura](https://gitlab.com/PatrikKaura/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. # quadtree