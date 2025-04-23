# Write a function that, given a string of text, returns a list of the top-3 most
# occurring words, in descending order of the number of occurrences.

#Assumptions:
#- A word is a string of letters (A to Z) optionally containing one or more apostrophes (').
#- Matches should be case-insensitive.
#- Ties may be broken arbitrarily.
#- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty list if a text contains no words.

def count(item):
    return item[1]

def top_3_words(string):
    result = []
    counts = {}

    for word in string.casefold().split():
        # handle words ending w/ comma
        if not word[-1].isalpha():
            word = word[:-1]

        counts[word] = counts.get(word, 0) + 1
    
    counts_list = sorted(list(counts.items()), key=count, reverse=True)

    return [elem[0] for idx, elem in enumerate(counts_list)
            if elem[0].isalpha() and idx < 3]


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
print(top_3_words('Test string is a string with multiple string words with shorter words, also.'))

'''
word and its count

input: a string
output: list, sorted top 3 most appearing words, descending order (greatest to least)

rules:
exp:
- a word is string of characters optionally containing one or more apostrophes
- case does not matter
- ties can be broken arbitrarily, in other words: random or w/o significance
- no words? return empty list
- fewer than 3 words? top 2 or top 1 words returned
imp:
- a word can be a single alphabetic character

data structure: dictionary (key: word, value: count)
- create the dictionary and test its returned value if no words

Algorithm:
High Level:
- Given an input string, for each unique word, determine its number of appearences
- For each of 3 words that appear the most in the string
-- return a list with the word most appearing, descending to the 3rd most appearing

Lw Lvl:
- start w/ dictionary 'counts' (keys: words, values: counts) and empty list 'result'

Step 1:
- Convert the dictionary to a list, and sort the values based on their 'count' reversed

Step 2:
- For each element at idx [0] (word) of the list dictionary ranged 0 to 3 (idx 0, 1, 2)
-- add to 'result' by appending 'counts_list[idx][0]' IF it is ALPHABETIC

Step 3:
- return 'result'


'Test string is a string with multiple string words with shorter words, also.'
sorted 'counts_list' w/ top 3 => [(string, 3), (with, 2), (words, 2)]
for each, counts_list[idx]
- counts_list[0][0] => string; [string]
- counts_list[1][0] => with; [string, with]
- counts_list[2][0] => words; [string, with, words]

'''