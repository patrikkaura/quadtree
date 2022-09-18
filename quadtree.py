from typing import List, Dict, Tuple
from dataclasses import dataclass, asdict
from time import sleep
import json

import numpy as np
from lightgbm import Booster

class QuadTree():

    _FIXED_WINDOW_SIZE: int = 50
    _MERGING_INTERVAL_LENGTH: int = 25 

    def _sequence_convertor(self, *, sequence: str) -> np.array:
        converted_sequences = []

        for i in range(0, len(sequence) - self._FIXED_WINDOW_SIZE):    
            converted = []
            for base in sequence[i:i+self._FIXED_WINDOW_SIZE]:
                if base == 'G':
                    converted.append(-1)
                elif base == 'C':
                    converted.append(1)
                else:
                    converted.append(0)

            converted_sequences.append(converted)
        return np.array(converted_sequences)

    def _init_tree(self, *, model_path: str) -> Booster:
        xgb = Booster(model_file=model_path)
        return xgb

    def _predict(self, *, model: Booster, converted_sequences: np.array, score_threshold: float) -> List[int]:
        results: List[int] = []
        predictions = model.predict(converted_sequences)

        for index, prediction in enumerate(predictions):

            if prediction > score_threshold:
                results.append(index)
        return results

    def _create_intervals(self, predicted_position: List[int]) -> List[int]:
        intervals = [(i, i+self._FIXED_WINDOW_SIZE) for i in predicted_position]

        return intervals

    def _merge_results(self, *, results: List[Tuple[int]]) -> List[Tuple[int]]:
        results = sorted(results, key=lambda x: x[0])
        i = 0
        for result in results:
          if result[0] > results[i][1]:
            i += 1
            results[i] = result
          else:
            results[i] = (results[i][0], result[1])
        return results[:i+1] 

    def _filter_results(self, *, merged_results: List[Tuple[int]]) -> List[Tuple[int]]:
        filtered = []
        for window in merged_results:
          if window[1] - window[0] > self._MERGING_INTERVAL_LENGTH:
            filtered.append(window)
        
        return filtered

    def _create_results(self, filtered_results, sequence) -> dict:
        results = [
            {
                'index': index,
                'position': position[0],
                'sequence': sequence[position[0]:position[1]+self._MERGING_INTERVAL_LENGTH],
                'length': position[1]+self._MERGING_INTERVAL_LENGTH-position[0],                     
            } for index, position in enumerate(filtered_results)
        ]
        return json.dumps(results)

    def analyse(self, sequence: str, model_path: str, score_threshold: float) -> dict:
        model = self._init_tree(model_path=model_path)
        converted_sequences = self._sequence_convertor(sequence=sequence)
        predicted_position = self._predict(model=model, converted_sequences=converted_sequences, score_threshold=score_threshold)
        results = self._create_intervals(predicted_position=predicted_position)
        merged_results = self._merge_results(results=results)
        filtered_results = self._filter_results(merged_results=merged_results)
        
        return self._create_results(filtered_results, sequence)