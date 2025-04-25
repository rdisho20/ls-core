# Given two words, determine the number of letters you need to remove from them to make them anagrams.
def anagram_difference(str1, str2):
    if len(str1) > len(str2) or len(str1) == len(str2):
        longer = str1
        shorter = str2
    
    else:
        longer = str2
        shorter = str1
    
    match_count = 0
    no_match_count = 0
    difference = len(longer) - len(shorter)
    
    for main_char in longer:
        for char in shorter:
            if main_char == char:
                match_count += 1
            
            else:
                no_match_count += 1
    
    if difference == match_count and difference != 0:
        return difference
    else:
        return abs(no_match_count - match_count - difference)


print(anagram_difference('', '') == 0)
print(anagram_difference('a', '') == 1)
print(anagram_difference('', 'a') == 1)
print(anagram_difference('ab', 'a') == 1)
print(anagram_difference('ab', 'ba') == 0)
print(anagram_difference('ab', 'cd') == 4)
print(anagram_difference('aab', 'a') == 2)
print(anagram_difference('a', 'aab') == 2)


'''
input: 2 strings
output: integer; the number of letters to remove from each to make anagrams

data structure: lists, to pop off or remove; strings as-is

Algo:
High Lvl
- Determine 'longer' and 'shorter' string
- If equal, set str1 -> 'shorter', str2 -> 'longer'

- calculate 'difference'

- For each 'char' in 'shorter'
-- if the characters match, increment 'match_count'
--  if characters don't match, incrmeent 'no_match_count'

- IF mtch and diff ==, return 'difference'
- ELSE return abs 'no_match_count' - 'match_count' - 'difference'

'a' 'aab'
a-a 1, a-a 2, a-b
difference = 2
1 - 2 (mtch) - 2 (diff) = abs(-3) X

'ab' 'abc'
a-a 1, a-b, a-c
b-a, b-b 2, b-c
difference = 1
4 - 2 (mtch) - 1(diff) = 1

'a' 'aabb'
a-a 1, a-a 2, a-b, a-b
difference = 3
2 - 3 (match) - 3 (diff) = abs(-3) X

'ab' 'cd'
a-c, a-d, b-c, b-d
difference = 0
4 - 0 - 0 = 4

'''