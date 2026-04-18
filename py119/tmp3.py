'''
Write a function that, given a string of text, returns a list of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

A word is a string of letters (A to Z) optionally containing one or more apostrophes (').
Matches should be case-insensitive.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty list if a text contains no words.
Examples:
'''
'''
Return a list of the 3 most occuring words, from biggest to smallest
DS: list, string, dictionary (word: occurences)
Algo:
CREATE A NEW LIST OF WORDS
COUNT EACH OCCURENCE OF A WORD AND SAVE TO A DICTIONARY
ITERATE THROUGH THE DICTIONARY AND FIND THE TOP 3
RETURN TOP 3

    Set words to a split string of text filter for words only which is first element of every characters should be a letter
    Set occurences to an empty dictionary
    For each word in words
        if word not in occurences
            Add word to occurences with a value of 1
        else
            Add one to value at word in occurences
    Return the first 3 elements in a sorted list of words by occurence

edge cases:
fewer than 3 unique words
return top 1 for 1 word
return top 2 for 2 words
return an empty list of no words
'''

def sort_by_occurences(key_value):
    word, count = key_value
    return count

def top_3_words(words):
    words = words.split()
    new_words = []
    occurences = {}
    for _, word in enumerate(words):
        word = word.casefold()
        if word[0].isalpha():
            new_words.append(word)
    
    for _, word in enumerate(new_words):
        if word not in occurences:
            occurences[word] = 1
        else:
            occurences[word] += 1
    
    occurences = list(occurences.items())
    sorted_occurences = sorted(occurences, key=sort_by_occurences, reverse=True)

    return [word for word, _ in sorted_occurences][:3]



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