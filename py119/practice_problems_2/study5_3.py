# Write a function `word_patterns` that takes a list of words and returns a dictionary
# where the keys are the words and the values are pattern strings. Words with the same
# letter pattern should have the same pattern string. For a pattern string, represent
# the first occurrence of a letter with 0, the second distinct letter with 1, and so on.

'''
input: list of words
output: returns dictionary; keys are words, values are pattern strings

E-rules:
pattern is where first occurence of a letter is 0, second distinct occurence is 1
    basically each distinct letter assigned a number
for each occurence of a unique character, concatinate its assigned number to string pattern

D-
seen characters can be set, built out dictionary as algorithm executes

A-
start w/ empty dict named 'result'
start w/ empty list named 'seen'

for each word in list
    add the word as a key to the dictionary w/ an '' as value
    for each letter in word
        if the letter is in 'seen'
            concatinate the index position of the letter to corresponding 'seen' value in dictionary
        else:
            append the letter to list 'seen'

'worldow'
[w, o, r, l, d]
w - 0
o - 1
r - 2
l - 3
d - 4
o - in list already, get its index position using .index
(nothing special, because getting first appearance of unique letter)
w - same, get .index first position


'''

def word_patterns(lst):
    result = {}

    for word in lst:
        result.setdefault(word, '')
        seen = []
        
        for idx, letter in enumerate(word):
            if letter in seen:
                result[word] += str(seen.index(letter))
            else:
                seen.append(letter)
                result[word] += str(seen.index(letter))
    
    return result

    


result = {'hello': '01223', 'world': '01234', 'apple': '01123', 'abcde': '01234'}
print(word_patterns(['hello', 'world', 'apple', 'abcde']) == result)

result = {'egg': '011', 'foo': '011', 'bar': '012', 'baz': '012', 'abc': '012'}
print(word_patterns(['egg', 'foo', 'bar', 'baz', 'abc']) == result)

print(word_patterns([]) == {})