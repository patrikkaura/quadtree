<h1 align='center'> QUADTREE</h1>
<br />
<div align="center">
    <img src="https://img.shields.io/badge/Quadtree v1.0.0-green?style=for-the-badge" alt='package_version'/>
    <img src="https://img.shields.io/badge/python 3.7+-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt='python_version'/>
</div>
<br />

The Quadtree is a gradient-boosted decision tree model used to predict guanine quadruplexes in DNA sequences. It's developed on top of the LightGBM python library. Each sequence base is encoded based on a given encoding prescription. The model was trained to be used with a sliding window and analyses the whole sequence. Machine learning model can be used as python script or thru preview website [quadtree.vercel.app](https://quadtree.vercel.app/)

## Repository structure

```
quadtree
    └───web -> preview website source code
    └───python
        └─── model -> lightgbm model params
        └─── train -> example files how training was performed
        └─── quadtree.py -> predictor
```

## Requirements

- lightgbm==3.3.2
- numpy==1.21.2

## Install dependencies

Before using install the requirements:

```bash
  pip install -r requirements.txt
```

## Usage

### Create model instance

```python
  from quadtree import Quadtree
  
  model = Quadtree()
```

### Run analysis - algorithm inputs

- sequence as a string (maximum length is not limited)
- threshold (recommended values is 0.2)
- quadnet model file path

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


## Authors

* **Patrik Kaura** - *Main developer* - [patrikkaura](https://gitlab.com/PatrikKaura/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. # quadtree
