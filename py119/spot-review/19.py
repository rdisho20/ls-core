#A string is considered to be in title case if each word in the string is either:
#a) Capitalized (that is, only the first letter of the word is in upper case)
#b) Considered to be an exception and put entirely into lower case unless it
# is the first word, which is always capitalized.

#Write a function that will convert a string into title case,
# given an optional list of exceptions (minor words). The list of minor words
# will be given as a string with each word separated by a space.
# Your function should ignore the case of the minor words string
# -- it should behave in the same way even if the case of the minor word string is changed.

def title_case(string, minor_words=None):
    string_list = string.split()

    if not minor_words: # good
        string_list = [word.capitalize() for word in string_list]
        return ' '.join(string_list)
    
    string_list = [word.casefold() for word in string_list]

    minor_words = minor_words.split()
    minor_words = [word.casefold() for word in minor_words]
    
    for idx, word in enumerate(string_list):
        if idx == 0: # good
            string_list[idx] = word.capitalize()
            continue
        elif word in minor_words:
            continue
        else:
            string_list[idx] = word.capitalize()
    
    return ' '.join(string_list)

print(title_case('a clash of KINGS', 'a an the of')) # should return 'A Clash of Kings'
print(title_case('THE WIND IN THE WILLOWS', 'The In')) # should return 'The Wind in the Willows'
print(title_case('the quick brown fox')) # should return 'The Quick Brown Fox'