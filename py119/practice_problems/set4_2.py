# Write a function that determines if two strings are
# anagrams of each other, ignoring spaces and case. 

def get_dict(string):
    counts = {}

    for char in string.casefold().replace(" ", ""):
        counts[char] = counts.get(char, 0) + 1
    
    return counts

def are_anagrams(str1, str2):
    if len(str1.replace(" ","")) != len(str2.replace(" ","")):
        return False

    str1_count = get_dict(str1)
    str2_count = get_dict(str2)

    return str1_count == str2_count


print(are_anagrams("listen", "silent")) # should return True
print(are_anagrams("Astronomer", "Moon starer")) # should return True
print(are_anagrams("hello", "world")) # should return False

'''
input: 2 strings
output: boolean value, True if anagram, False if not

Data structure: dictionary, getting counts of all characters, ignoring spaces and case

Algo:
Hgh Lvl:
Starting w/ dictionary counts for each word
- If dict1 == dict2, return True
- ELSE False


OG solution:
def get_dict(string):
    counts = {}

    for char in string.casefold():
        if char == ' ':
            continue
        counts[char] = counts.get(char, 0) + 1
    
    return counts

def are_anagrams(str1, str2):
    str1_count = get_dict(str1)
    str2_count = get_dict(str2)

    if str1_count == str2_count:
        return True
    
    return False

'''