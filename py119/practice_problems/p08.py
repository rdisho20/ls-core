VOWELS = 'aeiou'

def longest_vowel_substring(string):
    new_substr = ''
    longest_count = 0

    for idx, char in enumerate(string):
        if char not in VOWELS:
            if longest_count < len(new_substr):
                longest_count = len(new_substr)

            new_substr = ''
        else:
            new_substr += char

            if idx == len(string) - 1:
                if longest_count < len(new_substr):
                    longest_count = len(new_substr)

    return longest_count


print(longest_vowel_substring('cwm') == 0)
print(longest_vowel_substring('many') == 1)
print(longest_vowel_substring('launchschoolstudents') == 2)
print(longest_vowel_substring('eau') == 3)
print(longest_vowel_substring('beauteous') == 3)
print(longest_vowel_substring('sequoia') == 4)
print(longest_vowel_substring('miaoued') == 5)