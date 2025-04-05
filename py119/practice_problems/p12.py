def is_pangram(string):
    alphabet = set('abcdefghijklmnopqrstuvwxyz')
    return set(char.lower() for char in string if char.isalpha()) == alphabet


print(is_pangram('The quick, brown fox jumps over the lazy dog!') == True)
print(is_pangram('The slow, brown fox jumps over the lazy dog!') == False)
print(is_pangram("A wizard’s job is to vex chumps quickly in fog.") == True)
print(is_pangram("A wizard’s task is to vex chumps quickly in fog.") == False)
print(is_pangram("A wizard’s job is to vex chumps quickly in golf.") == True)

my_str = 'Sixty zippers were quickly picked from the woven jute bag.'
print(is_pangram(my_str) == True)


'''
def is_pangram(string):
    string_lwr = string.casefold()
    string_dict = {char: string_lwr.count(char)
                   for char in string_lwr if char.isalpha()}
    
    keys_list = list(string_dict.keys())

    return len(keys_list) == 26
'''