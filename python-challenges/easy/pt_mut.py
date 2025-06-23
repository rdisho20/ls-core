'''
P-
input: 2 DNA strands
output: integer; hamming distance (points of mutation)

E-rules:
if two sequences of unequal length, calculate based
    on length of shorter strand
'''

class DNA:
    def __init__(self, seq_1):
        self.seq_1 = seq_1
    
    def hamming_distance(self, seq_2):
        seq_1 = self.seq_1
        minimum_length = min(len(seq_1), len(seq_2))
        hamming_distance = 0

        for idx in range(minimum_length):
            if seq_1[idx] != seq_2[idx]:
                hamming_distance += 1
        
        return hamming_distance


