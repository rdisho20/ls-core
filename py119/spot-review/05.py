#Write a function that takes a lowercase string as input and returns the
#length of the longest substring that consists entirely of vowels (a, e, i, o, u).
VOWELS = 'aeiou'

def get_substrings(string):
    substring = ''
    substrings_lst = []

    for char in string:
        if char in VOWELS:
            substring += char
        else:
            if substring:
                substrings_lst.append(substring)
            substring = ''
        
    return substrings_lst

def solve(string):
    substrings = get_substrings(string)
    longest_length = 0

    for substring in substrings:
        substr_length = len(substring)
        if substr_length > longest_length:
            longest_length = substr_length
    
    return longest_length


print(solve("roadwarriors")) # should return 2
print(solve("suoidea")) # should return 3
