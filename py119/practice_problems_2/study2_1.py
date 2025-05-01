# Create a function that takes a string and returns
# a dictionary where keys are words that appear in the string
# and values are lists of indices where the word begins.
# Words are separated by spaces, and the indices should be zero-based. 

def word_indices(string):
    word_lst = string.split()
    result = {}
    char_count = 0

    for word in word_lst:
        if word in result:
            result[word].append(char_count)
        else:
            result[word] = [char_count]
        
        char_count += (len(word) + 1)
    
    return result


print(word_indices("the quick brown fox jumps over the lazy dog") == 
        {'the': [0, 31], 'quick': [4], 'brown': [10], 'fox': [16], 'jumps': [20], 'over': [26], 'lazy': [35], 'dog': [40]})
print(word_indices("hello hello hello") == {'hello': [0, 6, 12]})
print(word_indices("") == {})
print(word_indices("python python python") == {'python': [0, 7, 14]})

'''
w/ set default:

def word_indices(string):
    word_lst = string.split()
    result = {}
    char_count = 0

    for word in word_lst:
        result.setdefault(word, []).append(char_count)
        char_count += (len(word) + 1)
    
    return result

----
w/ get:

def word_indices(string):
    word_lst = string.split()
    result = {}
    char_count = 0

    for word in word_lst:
        indices = result.get(word, [])
        indices.append(char_count)
        result[word] = indices
        
        char_count += (len(word) + 1)
    
    return result

----    

input: string
output: dictionary; keys are words, values = list of indices where word begins

rules:
exp:
- words seperated by spaces
- indices zero based
- keys are words
- values are lists, w/ index numbers
imp:
- input string can be empty

data structure: string list -> build dictionary
w/ while loop

algorithm:
hgh lvl:
Start w/ a word list from input string
'result' equal to empty dict {}
'char_count' assigned int 0

IF len of string == 0: return {}

- For each word in 'word list'
-- Add to dictionary w/ current ['char_count'] integer as value
-- increment 'char_count' by the length of word + 1 (accounting for ' ' whitespace)
-- IF key exists, append current 'char_count' to list

- return 'result' dictionary

----

'python python python'

0
python -> [0]
+7

7
python -> [0, 7]
+7

14
python -> [0, 7, 14]


'''