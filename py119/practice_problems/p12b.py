def is_pangram(string):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    char_set = {char for char in string.casefold() if char.isalpha()}

    if len(char_set) == len(alphabet):
        return True
    
    return False

print(is_pangram('The quick, brown fox jumps over the lazy dog!') == True)
print(is_pangram('The slow, brown fox jumps over the lazy dog!') == False)
print(is_pangram("A wizard’s job is to vex chumps quickly in fog.") == True)
print(is_pangram("A wizard’s task is to vex chumps quickly in fog.") == False)
print(is_pangram("A wizard’s job is to vex chumps quickly in golf.") == True)

my_str = 'Sixty zippers were quickly picked from the woven jute bag.'
print(is_pangram(my_str) == True)


'''
input: string
output: boolean

rules:
- exp: case is irrelevent
- imp:
-- ignore non-alpha characters (ie. !,' ")

Data Structure: set (checking that unique characters == 26)

Algo:
High lvl
- given a string, strip it of any characters that are not alphabetical
- then, normalize the string, to work with lower case characters only
- Finally for each character, as long as it appears once in 'abcdefghijklmnopqrstuvwxyz'
- return True, otherwise return False

Low lvl
- Start w/ 'alphabet' = 'abcdefghijklmnopqrstuvwxyz'
- create set comprehension of input string 'char_set', filtering for only alphabetic characters with str.isalpha()

- check IF the 'char_set' length is equal to the length of 'alphabet', since sets hold only unique values, if it is equal
- we have a pangram, THUS return True
- OTHERWISE/ELSE return False
'''