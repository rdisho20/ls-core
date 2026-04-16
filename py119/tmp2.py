'''
Given a string and an integer i, write a method that splits the string up 
into a sentence of strings, where each string in the sentence contains a 
character of the argued string and every ith character after it.

-p
input: string, integer (i)
output: string
- sentence string of strings
- each string in the sentence contains a character from the original string
    ...followed by every (i)th character(s)

-rules:
explicit:
- return a sentence string of strings 
- each string in sentence contains a character from the original string

"a b c d e", 1
a
b
c

abcde bcde cde ...

implicit:
- each string in sentence is delimited by a ' '
- i cannot be less than 1, if it is return "i cannot be less than 1"
- if the string is empty, return the empty string
- our i STEP integer ignored white spaces

-d
-input string (w/o the whitespaces)
-build a substring for each character
-for every substring concatinate it to a 'final string'

-a
high level:
- Check if the i integer is less than 1 and if the arguement is an empty strings
    if so return the appropriate values
- Given the input string, remove all white space characters
- For each character, build a substring
    iterate over the original string where our step is 'i'
        given our current character, concatinate it to our substring
    concatinate the substring + ' ' to our 'final string'
- return the final string, minus the last character

low level:
- if i is less than 1, return "i cannot be less than 1"
- if string arguement is "", return ""
- remove all white space characters from arguement string ''.join[...]
- initialize a final string variable to ''
- For each character in 'cleaned up' argument string, initialize a substring variable to ''
    - For each character (using a range) in 'cleaned up' argument string (w/ step 'i')
        - concatinate the current character to our substring
    - concatinate the substring + ' ' to the final string
- return the final string minus the last character

** "abcde", 100 == "a b c d e" **
'''

def fragment(s, i):
    if i < 1:
        return "i cannot be less than 1"
    if s == "":
        return ""
    clean_s = s.replace(" ", "")
    final_string = []
    # for idx, char in enumerate(clean_s):
    #     substring = char
    #     for num in range(idx + i, len(clean_s), i):
    #         substring += clean_s[num]
    #     final_string += substring + ' '
    for idx in range(0, len(clean_s)):
        word = clean_s[idx:len(clean_s):i]
        final_string.append(word)
    
    return ' '.join(final_string)

print(fragment("abcde", 1) == "abcde bcde cde de e")
print(fragment("a b c d e", 2) == "ace bd ce d e")
print(fragment("a    b   c de", 2) == "ace bd ce d e")
print(fragment("mary had a little lamb", 3) == "mydila ahatem raltlb ydila hatem altlb dila atem ltlb ila tem tlb la em lb a m b")
print(fragment("abcde", 0) == "i cannot be less than 1")
print(fragment("abcde", 100) == "a b c d e")
print(fragment("", 1) == "")
