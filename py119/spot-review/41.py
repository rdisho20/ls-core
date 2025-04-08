# Count the number of Duplicates
# Write a function that will return the count of distinct case-insensitive
# alphabetic characters and numeric digits that occur more than once in the input string.

def duplicate_count(string):
    char_dict = {}

    for char in string.casefold():
        char_dict[char] = char_dict.get(char, 0) + 1
    
    chars_filtered = [char for char, value in char_dict.items() if value > 1]

    return len(chars_filtered)


print(duplicate_count("") == 0)
print(duplicate_count("abcde") == 0)
print(duplicate_count("abcdeaa") == 1)
print(duplicate_count("abcdeaB") == 2)
print(duplicate_count("Indivisibilities") == 2)