# given a string, return sum of every UTF-16 value of every character in string
# define a function utf16_value
# - for every character in string
# -- append the ord() value of each character to new list 'sum_chars')
# - outside loop, return invokation of sum() passing in 'sum_chars')
def utf16_value(string):
    sum_chars = [ ord(char) for char in string ]
    return sum(sum_chars)

# These examples should all print True
print(utf16_value('Four score') == 984)
print(utf16_value('Launch School') == 1251)
print(utf16_value('a') == 97)
print(utf16_value('') == 0)

# The next three lines demonstrate that the code
# works with non-ASCII characters from the UTF-16
# character set.
OMEGA = "\u03A9"              # UTF-16 character 'Ω' (omega)
print(utf16_value(OMEGA) == 937)
print(utf16_value(OMEGA + OMEGA + OMEGA) == 2811)

# most pythonic would be to use a generator expression in sum()...
# ...instead of list comprehension (less efficient)