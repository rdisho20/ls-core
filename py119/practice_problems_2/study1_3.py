# Create a function that takes a string consisting of words separated by spaces.
# The function should return the longest word that is a palindrome in the string.
# If there are multiple palindromes of the same length, return the one that appears first.
# If there are no palindromes, return an empty string.

def is_palindrome(string):
    return string == string[::-1]

def longest_palindrome(string):
    str_lst = string.split(' ')
    palindromes = []

    for word in str_lst:
        if is_palindrome(word):
            palindromes.append(word)
    
    if not palindromes:
        return ''
    
    return max(palindromes, key=len)


print(longest_palindrome('racecar level civic') == 'racecar')
print(longest_palindrome('madam refer stats')) # should return any of these strings
print(longest_palindrome('hello world python') == '')
print(longest_palindrome('wow noon deed pop') == 'noon')
print(longest_palindrome('a aa aaa') == 'aaa')


'''
my original palindrome check

def is_palindrome(string):
    half = len(string) // 2

    if len(string) % 2 == 1:
        if string[:half] == string[:half:-1]:
            return True
    elif len(string) % 2 == 0:
        if string[:half] == string[:half - 1:-1]:
            return True
    else:
        return False

----
OTHER RETURN

return '' if not palindromes else max(palindromes, key=len)

----

input: string
output: string, longest word that is palindrome

rules:
exp:
- at least 2 words in string seperated by space(s)
- no palindrome? return empty string
- multiple palindromes w/ longest length? return first appearing
imp:
- word can actually be gibberish

data structure: list of words

algo:
hgh lvl:
- start w/ string converted to list of words

- For each word, check if it is palindrome
-- if it is palindrome, add to 'palindromes' list

- return longest plaindrome from 'palindromes'

Low Lvl:
start w/ string converted -> lst of words
and empty 'palindromes' list []

for each word in 'str_lst'
- IF isplaindrome():
-- append to 'str_lst'

return max(str_lst, key=len)

---
ispalindrome()
- For each char in range(length of string // 2):
-- check if char at idx and its converse are same character
-- if so, return True

Lw Lvl:
- get length of input list // 2
- IF len str is ODD
-- check if string[:len(string)//2] == string[(len(string)//2) + 1::-1]
--- return true
- IF len str is EVEN
-- check if string[:len(string)//2] == string[(len(string)//2)::-1]
--- return True
- ELSE => return False


racecar: [:3]rac; [3+1::-1]rac; YES
rr [0] & [-1] - good, aa [1] & [-2] - good, cc [2] & [-3] - good, e [3] & [-4] - good

noon: [:2]no; [2::-1]no; YES
nn [0] & [-1] - good, oo [1] & [-2]


'''