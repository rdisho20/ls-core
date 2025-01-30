# X Given a string, return string w/ non-alphanums replaced with ' '
# X if more than one non-alphanums in a row, replace w/ ' '
# define function, taking 1 parameter 'string'
# - iterate through characters in string
# - for every non-alphanum substring that is at least 1 character in length
# --- get substrings <- everytime reach alphanum char, store previous chars
# --- in list as substr element, begin new substr element for all alpha-num,
# --- begin new substr element for all non-alphanum, repeat

# - for every element in new list
# -- replace each non-alphanum substring w/ 1 whitespace character (' ')
# -- return list joined making new string
def clean_up(string):
    init_result = ''
    final_result = ''

    for i in range(len(string)):
        if not string[i].isalnum():
            init_result += ' '
        else:
            init_result += string[i]
    
    for i in range(len(init_result)):
        if init_result[i] == ' ' and i == 0:
            final_result += init_result[i]

        elif init_result[i] == ' ' and init_result[i - 1] != ' ':
            final_result += init_result[i]

        elif init_result[i] != ' ':
            final_result += init_result[i]

    return final_result

print(clean_up("---what's my +*& line?"))
print(clean_up("---what's my +*& line?") == " what s my line ")
# True

#LS Solution
"""
def clean_up(text):
    clean_text = ''

    for idx, char in enumerate(text):
        if char.isalpha():
            clean_text += char
        elif idx == 0 or clean_text[-1] != ' ':
            clean_text += ' '

    return clean_text
"""