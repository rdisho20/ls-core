# defin function 'clean_up'
# - set a variable name 'result' = ''
# - if string[0] is NOT alnum concat ' ' to result
# - while len(result) > 0
# -- if string[i] not alnum and result[-1] is not alnum
# --- continue
# -- if string[i] is not alnum and result[-1] is alnum
# -- concat ' ' to result
# -- if string[i] is alnum
# --- concat string[i] to result
# -- if i == len(string)
# --- break

def clean_up(string):
    result = ''

    for char in string:
        if not char.isalnum() and not result:
            result += ' '
        elif not char.isalnum() and not result[-1].isalnum():
            continue
        elif not char.isalnum() and result[-1].isalnum():
            result += ' '
        elif char.isalnum():
            result += char
    
    return result

print(clean_up("---what's my +*& line?"))
print(clean_up("---what's my +*& line?") == " what s my line ")

#LS Solution
'''
def clean_up(text):
    clean_text = ''

    for idx, char in enumerate(text):
        if char.isalpha():
            clean_text += char
        elif idx == 0 or clean_text[-1] != ' ':
            clean_text += ' '

    return clean_text
'''

'''My first solution
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
'''