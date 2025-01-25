# given a string, collapse any subsequent duplicate chars and return new str
# define a function that takes (string)
# - define a variable 'result' to store resulting string
# - iterate through a string
# -- IF index = 0, concat first char
# -- ELIF current char != equal previous character
# --- concat current char to 'result'
# -- ELIF current character == previous, continue next iteration, doing nothing
# - return 'result'
def crunch(string):
    result = ''
    for index in range(len(string)):
        if index == 0:
            result += string[index]
        elif string[index] != string[index - 1]:
            result += string[index]
        elif string[index] == string[index]:
            continue

    return result

# These examples should all print True
print(crunch('ddaaiillyy ddoouubbllee') == 'daily double')
print(crunch('4444abcabccba') == '4abcabcba')
print(crunch('ggggggggggggggg') == 'g')
print(crunch('abc') == 'abc')
print(crunch('a') == 'a')
print(crunch('') == '')

# Other Solutions
"""
def crunch(tstr):
    crunched = ""
    for char in text:
        if not crunched.endswith(char):
            crunched += char
    return crunched

# using enumerate()
def crunch(string):
    result = ''
    for index, char in enumerate(string):
        if index == 0 or char != string[index - 1]:
            result += char
    return result


import re                   # solution w/ regex
def crunch(text: str):
    crunched = re.sub(r"(.)\1+", r"\1", text)
    return crunched
"""