# The goal of this exercise is to convert a string to a new string where each character in the new string 
# is "(" if that character appears only once in the original string, or ")" if that character appears 
# more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

def duplicate_encode(string):
    string = string.casefold()

    char_set = set()
    result = ''

    for char in string:
        if string.count(char) > 1:
            result += ')'
        else:
            result += '('
            
        char_set.add(char)

    return result


print(duplicate_encode("din") == "(((")
print(duplicate_encode("recede") == "()()()")
print(duplicate_encode("Success") == ")())())")
print(duplicate_encode("(( @") == "))((")