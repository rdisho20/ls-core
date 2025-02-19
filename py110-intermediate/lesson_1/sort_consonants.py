VOWELS = 'aeiou'

def calculate_maximum_consonants(string):
    if ' ' in string:
        split_string = string.split(' ')
        string = ''.join(split_string)

    maximum_consonants_count = 0
    adjacent_consonants_string = ''

    for letter in string:
        if letter not in VOWELS:
            adjacent_consonants_string += letter
            if len(adjacent_consonants_string) > maximum_consonants_count:
                if len(adjacent_consonants_string) > 1:
                    maximum_consonants_count = len(adjacent_consonants_string)
        else:
            if len(adjacent_consonants_string) > maximum_consonants_count:
                if len(adjacent_consonants_string) > 1:
                    maximum_consonants_count = len(adjacent_consonants_string)

            adjacent_consonants_string = ''

    return maximum_consonants_count

def calculate_adjacent_consonants(strings):
    # key uses value(returned <- 'calculate_maximum_consonants')
    strings.sort(key=calculate_maximum_consonants, reverse=True)
    return strings

my_list = ['aa', 'baa', 'ccaa', 'dddaa']
print(calculate_adjacent_consonants(my_list))
#print(sort_by_consonant_count(my_list))
# Expected: ['dddaa', 'ccaa', 'aa', 'baa']

my_list = ['can can', 'toucan', 'batman', 'salt pan']
print(calculate_adjacent_consonants(my_list))
#print(sort_by_consonant_count(my_list))
# Expected: ['salt pan', 'can can', 'batman', 'toucan']

my_list = ['bar', 'car', 'far', 'jar']
print(calculate_adjacent_consonants(my_list))
#print(sort_by_consonant_count(my_list))
# Expected: ['bar', 'car', 'far', 'jar']

my_list = ['day', 'week', 'month', 'year']
print(calculate_adjacent_consonants(my_list))
#print(sort_by_consonant_count(my_list))
# Expected: ['month', 'day', 'week', 'year']

my_list = ['xxxa', 'xxxx', 'xxxb']
print(calculate_adjacent_consonants(my_list))
#print(sort_by_consonant_count(my_list))
# Expected: ['xxxx', 'xxxb', 'xxxa']

'''
My code ( Getting closer, need more practice identifying programmatic conditions):

VOWELS = 'aeiou'

def calculate_adjacent_consonants(strings_list):
    consonants_calculated = {}

    for string in strings_list:
        adjacent_consonants_count = 0

        for idx in range(0, len(string)):
            if string[idx] in VOWELS:
                continue
            elif string[idx] == ' ':
                if (string[idx - 1] and string[idx + 1]) not in VOWELS:
                    adjacent_consonants_count += 2
            else:
                try:
                    if (string[idx] and string[idx + 1]) not in VOWELS:
                        adjacent_consonants_count += 1
                except IndexError:
                    print('end of word') # for debugging
                    continue
        
        consonants_calculated[string] = adjacent_consonants_count
    
    return consonants_calculated

def sort_by_consonant_count():
    pass
    
# my helper function using a dictionary, assuming I could use that to help me sort...
# probably would require another function :-/
    
def calculate_adjacent_consonants(list):
    sorting_dict = {}
    for string in list:
        maximum_consonants_count = calculate_maximum_consonants(string)
        sorting_dict[string] = maximum_consonants_count
    
    return sorting_dict
'''