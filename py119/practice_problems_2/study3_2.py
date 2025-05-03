# Create a function that takes a string argument and returns a new string
# where every word at an odd-numbered position (1-indexed) has its letters reversed.
# Words at even-numbered positions remain unchanged. A word consists of characters
# separated by spaces. Punctuation is considered part of a word.    

'''
input: string
output: string, where every word at odd-numbered position (1-idx) has letters reversed

E-rules:
words @ even # positions are unchanged
word conssits of characters seperated by spaces
punctuation considered part of word

I-rules:
a word can be 1 letter
1 word as input string
input string can be empty

Data structure: list

A-
Given an input string, convert the string to a list where
each element is a word seperated by spaces

For each element and idx in list
    add 1 to idx (1 based indexing)
    IF index is an even number
        Continue to next iteration
    IF the index is an odd number
        SET the list element at current index equal to its reversed self

return the list joined together by ' ' (whitespace)

-- maybe no need:
            try:
                str_lst[idx - 1] = word[-1::-1]
            except IndexError:
                if idx == len(str_lst):
                    str_lst[idx - 1] == word[-1::-1]

'''

def transform_words(string):
    str_lst = string.split()

    for idx, word in enumerate(str_lst):
        idx += 1

        if idx % 2 == 0:
            continue
        else:
            str_lst[idx - 1] = word[-1::-1]
    
    return ' '.join(str_lst)


print(transform_words("hello world") == "olleh world")
print(transform_words("Launch School is awesome") == "hcnuaL School si awesome")
print(transform_words("") == "")
print(transform_words("Python") == "nohtyP")
print(transform_words("a b c d e") == "a b c d e")