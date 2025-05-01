# Create a function that takes a list of words and returns a
# new list containing only words that have an odd number of characters.
# Preserve the original order of the words.

def odd_length_words(lst):
    result = []

    for word in lst:
        if len(word) % 2 == 1:
            result.append(word)
    
    return result

print(odd_length_words(['hello', 'world', 'python', 'code', 'a']) == ['hello', 'world', 'a'])
print(odd_length_words(['launch', 'school', 'is', 'great']) == ['great'])
print(odd_length_words(['even', 'four', 'six']) == ['six'])
print(odd_length_words([]) == [])


'''
input: list of words
output: list, containing words w/ odd number lengths

rules
exp:
- original order of characters preserved
imp:
- list can be empty, return empty list
- a word can be single letter, like 'I' or 'a'

data structure: use list as-is, return new list

algorithm
Hgh LVl:
- Given a list of words:
- For each word, if it's length is odd, add it to our new list

'''