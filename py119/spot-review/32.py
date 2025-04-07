# Given a string, replace every letter with its position in the alphabet.
# If anything in the text isn't a letter, ignore it and don't return it.

def alphabet_position(string):
    result = [str(ord(char) - 96) for char in string.casefold() if char.isalpha()]
    return ' '.join(result)


print(alphabet_position("The sunset sets at twelve o' clock.") == "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
print(alphabet_position("-.-'") == "")