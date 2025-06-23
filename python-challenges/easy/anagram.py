'''
P-
input: candidates for possible anagrams
output: list of anagrams

E-rules:
anagram: word or phrase formed by rearranging the letters of a different word or phrase
'''

class Anagram:
    def __init__(self, string):
        self.string = string.casefold()
    
    def match(self, candidates):
        string_sorted = ''.join(sorted(self.string))
        anagrams = []

        for word in candidates:
            if word.casefold() == self.string:
                continue
            word_sorted = ''.join(sorted(word.casefold()))
            if word_sorted == string_sorted:
                anagrams.append(word)
        
        return anagrams
