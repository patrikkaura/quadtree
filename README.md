<h1 align='center'>Quadtree</h1>
<br />
<div align="center">
    <img src="https://img.shields.io/badge/Quadtree v1.0.0-green?style=for-the-badge" alt='package_version'/>
    <img src="https://img.shields.io/badge/python 3.7+-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt='python_version'/>
    <img src="https://img.shields.io/badge/node.js 16+-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt='node_js_version'/>
    <img src="https://img.shields.io/badge/react 18+-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt='react'/>
    <img src="https://img.shields.io/badge/nextjs 12+-black?style=for-the-badge&logo=nextjs" alt='nextjs'/>
</div>
<br />

The Quadtree is a gradient-boosted decision tree model used to predict guanine quadruplexes in DNA sequences. It's developed on top of the LightGBM python library. Each sequence base is encoded based on a given encoding prescription. The model was trained to be used with a sliding window and analyses the whole sequence. Machine learning model can be used as python script or thru preview website [quadtree.vercel.app](https://quadtree.vercel.app/)

## Repository structure

```
quadtree
    └─ web -> preview website source code
    └─ python
          └─ model -> lightgbm model params
          └─ train -> example files how training was performed
          └─ quadtree.py -> predictor
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

## Model scheme

![LAYOUT_LEFT_RIGHT Quadtree](https://user-images.githubusercontent.com/94244479/202798752-90b77a9c-7057-4437-8670-23681301bda2.png)


## Training parameters

These parameter were used to train lightgbm model

| LGBM Classifier      | value                 |
|----------------------|-----------------------|
| colsample bytree     | 0.817574864502621     |
| learning rate        | 0.03744835808549148   |
| max bin              | 127                   |
| min child sample     | 3                     |
| number of estimators | 1000                  |
| number of leaves     | 74                    |
| regularization alpha | 0.0033803043003857677 |
| regularization lambda| 0.7013136087939289    |
| objective            | binary                |  

## Authors

* **Patrik Kaura** - *Main developer* - [patrikkaura](https://gitlab.com/PatrikKaura/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. # quadtree
