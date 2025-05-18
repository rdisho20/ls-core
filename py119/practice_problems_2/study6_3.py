# Implement a function `group_by_frequency` that takes a string and returns a dictionary
# where the keys are the frequency of occurrence and the values are sets of characters 
# that appear that many times.    

'''
input: string
output: dictionary; keys are frequency of occurrence & values = sets of characters appearing that many times

D-
string as-is, to iterate and build out dictionary and sets simultaneously
build dictionary where keys are characters and counts are values
then return a dictionary comprehension of keys and values reversed where each value corresponding to a key added to set

A-
start w/ an empty dictionary

for each key, value in str_dict (from seperate helper function)
    if doesn't exist as key add each 'count_value' as a key
        then add a set of its corresponding original key
    
    else if key does exist, then ADD the corresponding key to the set

"mississippi"
m, 1 => 1: {m}
i, 4 => 4: {i}
s, 4 => (key exists, add to set) 4: {i, s}
p, 2 => 2: {p}

1, doesnt exist => 1 then set m => 1: {m}
4, doesnt exist => 4 then set i => 4: {i}
4, exists => add to set... => 4: {i, s}
2, doesnt exist => 2 then set p => 2: {p}

"aabbbcc"
a, 2 => 2: {a}
b, 3 => 3: {b}
c, 2 => 2: {a, c}

'''

def get_dictionary(string):
    str_dict = {}

    for char in string:
        str_dict[char] = str_dict.get(char, 0) + 1
    
    return str_dict

def group_by_frequency(string):
    str_dict = get_dictionary(string)
    result = {}

    for char, count_value in str_dict.items():
        if not result.get(count_value):
            result[count_value] = set({char})
        elif result.get(count_value):
            result[count_value].add(char)

    return result


print(group_by_frequency("mississippi") == {1: {'m'}, 2: {'p'}, 4: {'i', 's'}})
print(group_by_frequency("aabbbcccc") == {2: {'a'}, 3: {'b'}, 4: {'c'}})
print(group_by_frequency("") == {})
print(group_by_frequency("abcde") == {1: {'a', 'b', 'c', 'd', 'e'}})
print(group_by_frequency("aabbbcc"))


'''Areas for improvment:

1. Simplifying Conditional Logic
The conditional checks in your main function could be simplified using Python's dict.setdefault() method:

def group_by_frequency(string):
    str_dict = get_dictionary(string)
    result = {}

    for char, count in str_dict.items():
        # Initialize with empty set if key doesn't exist
        result.setdefault(count, set()).add(char)
    
    return result


2. Using Collections Module
For counting character frequencies, Python's collections.Counter is a perfect fit:

from collections import Counter

def group_by_frequency(string):
    char_counts = Counter(string)
    result = {}
    
    for char, count in char_counts.items():
        result.setdefault(count, set()).add(char)
    
    return result

'''