'''Write a function that, given a string of text, returns a list of the top-3 most
occurring words, in descending order of the number of occurrences.

Assumptions:
- A word is a string of letters (A to Z) optionally containing one or more apostrophes (').
- Matches should be case-insensitive.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty list if a text contains no words.'''

SYMBOLS = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~'



def top_3_words(string):
    word_dict = {}
    word_list = string.split()

    for word in word_list:
        word = word if word[-1:] not in SYMBOLS else word[:-1] # accounting for ending punctuation to be removed

        if (not word_dict.get(word) 
            and (word.isalpha() or word.count('-') == 1)): # account for hyphenated words
            word_dict[word] = 1
        elif word.isalpha():
            word_dict[word] += 1
    
    def occurrence(word_dict):
        return word_dict
    
    to_sort = list(word_dict.keys())

    sorted_words = sorted(to_sort)

    return to_sort[:3]



print(top_3_words(" , e .. ")) # ["e"]
print(top_3_words(" ... ")) # []
print(top_3_words(" ' ")) # []
print(top_3_words(" ''' ")) # []
print(top_3_words("""In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.""")) # should return ["a", "of", "on"]
