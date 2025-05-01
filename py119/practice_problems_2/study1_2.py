# Create a function that takes a string as an argument and returns a new string
# where vowels are replaced with the next vowel in the sequence
# (a -> e, e -> i, i -> o, o -> u, u -> a). The vowel sequence is circular,
# so 'u' is replaced with 'a'. Maintain the case of the original vowel.

def rotate_vowels(string):
    sequence = 'aeiou'

    string_lst = list(string)
    
    for idx, char in enumerate(string_lst):
        if char.lower() in sequence:
            idx_new_char = sequence.index(char.lower()) + 1

            if char.isupper():
                try:
                    string_lst[idx] = sequence[idx_new_char].upper()
                except IndexError:
                    string_lst[idx] = sequence[idx_new_char - len(sequence)].upper()
            
            elif char.islower():
                try:
                    string_lst[idx] = sequence[idx_new_char]
                except IndexError:
                    string_lst[idx] = sequence[idx_new_char - len(sequence)]
        
    return ''.join(string_lst)


print(rotate_vowels('hello world') == 'hillu wurld')
print(rotate_vowels('PYTHON') == 'PYTHUN')
print(rotate_vowels('aeiou') == 'eioua')
print(rotate_vowels('xyz') == 'xyz')
print(rotate_vowels('Launch School') == 'Leanch Schuul')


'''LSBot Solutions

# w/ modulo
# 'cuz The mathematical formula is: a % b = a - (b * floor(a/b))
# so good for circular operations

def rotate_vowels(string):
    sequence = 'aeiou'
    string_lst = list(string)
    
    for idx, char in enumerate(string_lst):
        if char.lower() in sequence:
            vowel_idx = sequence.index(char.lower())
            next_idx = (vowel_idx + 1) % len(sequence)
            
            if char.isupper():
                string_lst[idx] = sequence[next_idx].upper()
            else:
                string_lst[idx] = sequence[next_idx]
    
    return ''.join(string_lst)

----
# instead of iterating through list and reassigning
# use dictionary map, for slightly better performance

def rotate_vowels(string):
    vowel_map = {'a': 'e', 'e': 'i', 'i': 'o', 'o': 'u', 'u': 'a',
                 'A': 'E', 'E': 'I', 'I': 'O', 'O': 'U', 'U': 'A'}
    
    return ''.join(vowel_map.get(char, char) for char in string)

'''


'''
input: string
output: new string; each vowel replaced w/ next vowel in sequence

rules:
exp:
- maintain case of original vowel
- use sequence 'aeiou'
imp:
- an input can have no vowels

data structure: string as-is

algorithm
Hgh Lvl:
- given an input string, and vowel sequence

- For each letter in input string
-- IF vowel,
--- IF vowel is lowercase, replace with next in 'sequence'
--- IF vowel is uppercase, replace w/ next in 'sequence' uppercased

- return input string

Low Lvl:
- start w/ 'sequence' assigned value 'aeiou'

Step 1:
- For each 'char' in 'string'
-- IF char.casefold() in 'sequence'
--- 'idx_new_char' => sequence.index(char.casefold()) + 1 (next vowel in 'sequence')
--- IF char is upper => 
---- IF string_lst[idx] = sequence[idx_new_char].upper()
--- IF char is lower => string_lst[idx] = sequence[idx_new_char]

Step 2:
- return 'string'

'hello world' => 'hillu wurld'

'e' => 2 => 'i'
'o' => 4 => 'u'
'o' => 4 => 'u'

'PYTHON' => 'PYTHUN'

O => o => 4 => u => U

'''