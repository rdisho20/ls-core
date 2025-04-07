# Given two words, determine the number of letters you need to remove from them to make them anagrams.
def anagram_difference(str1, str2):
    len_str1 = len(str1)
    len_str2 = len(str2)
    total = 0


    for char in str1:
        if char not in str2:
            total += 1
    
    if total * 2 == len_str1 + len_str2:
        return total
    
    return abs(len_str1 - len_str2) + (total * 2)


print(anagram_difference('', '') == 0)
print(anagram_difference('a', '') == 1)
print(anagram_difference('', 'a') == 1)
print(anagram_difference('ab', 'a') == 1)
print(anagram_difference('ab', 'ba') == 0)
print(anagram_difference('ab', 'cd') == 4)
print(anagram_difference('aab', 'a') == 2)
print(anagram_difference('a', 'aab') == 2)


'''
def anagram_difference(str1, str2):
    long_str = str1 if len(str1) > len(str2) else str2
    short_str = str1 if len(str1) < len(str2) else str2

    count = 0
    for _ in long_str:
        for short_char in short_str:
            count += long_str.count(short_char)
    
    return len(long_str) - count
'''