# Create a function called `find_exclusive_characters` that takes two strings and returns a set
# containing characters that appear exclusively in one string but not the other.

'''
input: 2 strings
output: set; contains characters that appear exclusively in one string but not the other

'''

def find_exclusive_characters(str1, str2):
    str1 = set(str1)
    str2 = set(str2)

    return str1 ^ str2

print(find_exclusive_characters("hello", "world") == {"h", "e", "d", "w", "r"})
print(find_exclusive_characters("abcde", "abcde") == set())
print(find_exclusive_characters("", "python") == {"p", "y", "t", "h", "o", "n"})
print(find_exclusive_characters("unique", "") == {"u", "n", "i", "q", "e"})