# Write a function that determines if two strings are valid anagrams of
# each other, but this time ignoring certain characters like spaces, punctuation, and case.

def are_anagrams(str1, str2, ignore=".,?! "):
    for char in ignore:
        if char in str1 or char in str2:
            str1 = str1.replace(char, '')
            str2 = str2.replace(char, '')
    
    if len(str1) != len(str2):
        return False
    
    str1 = str1.casefold()
    str2 = str2.casefold()

    print(str1)
    print(str2)
    
    for char in str1:
        if char not in str2:
            return False
    
    return True


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
- I will do 2 dictionaries 1st - DONE
- 2nd will do key signatures

algorithm:
Start w/ each string normalized, casefold and no punctuation

- Given 2 strings, if they are not same length return False

- For each character in OTHER string,
-- if character is not in first string
--- return False (exiting function)

- IF loop finishes, return True (we have an anagram)


Normalize string:
convert string -> list
for each character in string
- if in 'ignore', pop off list
return list converted to string

williamshakespeare

'''