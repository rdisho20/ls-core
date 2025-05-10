# Create a function that takes a string and returns a dictionary where:
#   •   The keys are all possible 2-character substrings in the input string
#   •   The values are how many times each substring appears in the string
# If the input string has fewer than 2 characters, return an empty dictionary.   

'''
input: string
output: dictionary; keys are all possible 2-character substrings of input string
values are how many times each appear in the string

E-rules:
substrings are 2-characters
if input string has fewer than 2 characters, return empty dicitonary

I-rules:
input string can be empty

data structure: list or string as is

A-
start w/ 'result' equal to empty dictionary

If input string length is less than 2, return empty dictionary

For each character in input string
    if current index is last index in the string
        break out of loop immediately (we cannot make 2-char substring)
    get substring
    if substring is not in dictionary
        add substring to 'result' dictionary count 1
    otherwise
        increment count at substring key by 1

return the dictionary

'aaa'
a - 'aa' 1
a - 'aa' 2
a - break

'hello'
h - 'he' 1
e - 'el' 1
l - 'll' 1
l - 'lo' 1
o - break

'banana'
b - 'ba' 1
a - 'an' 1
n - 'na' 1
a - 'an' 2
n - 'na' 2
a - break

'''

def substring_frequency(string):
    if len(string) < 2:
        return {}

    result = {}
    
    for idx, char in enumerate(string):
        if idx == len(string) - 1:
            break

        substring = string[idx:idx + 2]

        if result.get(substring, 0):
            result[substring] += 1
            continue

        result[substring] = 1

    return result


print(substring_frequency("hello") == {'he': 1, 'el': 1, 'll': 1, 'lo': 1})
print(substring_frequency("banana") == {'ba': 1, 'an': 2, 'na': 2})
print(substring_frequency("a") == {})
print(substring_frequency("") == {})
print(substring_frequency("aaa") == {'aa': 2})

'''
        if substring not in result:
            result[substring] = 1
        else:
            result[substring] += 1
'''