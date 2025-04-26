# Write a function that determines if two strings are valid anagrams of
# each other, but this time ignoring certain characters like spaces, punctuation, and case.

def get_dict(string, ignore):
    counts = {}

    for char in string.casefold():
        if char in ignore:
            continue

        counts[char] = counts.get(char, 0) + 1
    
    return counts


def are_anagrams(str1, str2, ignore=".,?! "):
    str1_dict = get_dict(str1, ignore)
    str2_dict = get_dict(str2, ignore)

    print(str1_dict)
    print(str2_dict)

    return str1_dict == str2_dict


print(are_anagrams("Listen!", "Silent."))  # True
print(are_anagrams("rail safety", "fairy tales"))  # True
print(are_anagrams("William Shakespeare", "I am a weakish speller"))  # True
print(are_anagrams("Hello", "Goodbye"))  # False



'''
input: string1 and string2, w/ def ignore string
output: boolean value

rules:
exp:
- anagrams, are words that spell each other rearranged w/ no extra or missing characters
- ignor ' ', '.,?!' (whitspace, and punctuation)

data structure: dictionary, for each letter, count their appearance (2 dictionaries, or key signatures)
- I will do 2 dictionaries 1st
- 2nd will do key signatures

algorithm:
- Given 2 strings, for each, add character counts to 2 dictionaries
-- normalizing string and ignoring characters in 'ignore'

- check if dictionaries are equal to each other, if so return True
-- if not return False


'''