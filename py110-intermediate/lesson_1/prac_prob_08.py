import pprint

def count_each_letter(string):
    string = ''.join(string.split(' '))
    str_dict = {}

    for letter in string:
        count = 1

        if not str_dict.get(letter):
            str_dict[letter] = count
        elif str_dict[letter]:
            count += 1
            str_dict[letter] = count
    
    return str_dict



statement = "The Flintstones Rock"

pprint.pprint(count_each_letter(statement))

'''
LS solution:
char_freq = {}

# replace just as good of option, maybe cleaner than my approach
statement = statement.replace(' ', '') 

# For every letter, using get to return default value 
# if value doesn't already exits then adds one
for char in statement:
    char_freq[char] = char_freq.get(char, 0) + 1 

print(char_freq)

'''