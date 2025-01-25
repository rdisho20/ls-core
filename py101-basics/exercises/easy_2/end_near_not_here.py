import math

"""
def penultimate(string):
    return string.split()[-2]

# These examples should print True
print(penultimate("last word") == "last")
print(penultimate("Launch School is great!") == "is")
"""

# Further exploration
# define function to catch errors of invalid input
# - 
# define a function that returns the middle word of a sentance
# - split string
# - obtain length of 'string_split'
# - while 'string_split' length % 2 == 0
# -- ask for a different input
# 
# - elif 'string_split' length %
# get user input

# return middle word in phrase
def penultimate(words):
    words_list = words.split()

    if len(words_list) == 1:
        return "Sentence is only 1 word, therefore invalid."
    elif not words_list:
        return "The sentence is non-existent."
    elif len(words_list) < 3:
        return "The sentence's length is less than 3, therefore invalid."
    elif len(words_list) % 2 == 0:
        return "This sentence has an even length, therefore invalid."
    elif len(words_list) % 2 == 1 and len(words_list):
        return words_list[math.floor(len(words_list) / 2)]
        
print(penultimate("last word"))
print(penultimate("Launch School is great!"))
print(penultimate("Launch School is freakin' great!"))
print(penultimate(""))
print(penultimate("what"))