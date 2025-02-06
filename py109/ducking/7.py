# X given a string, return a shortened string using counts of repeated chars
# define a function called compressed_string(string)
# - initiate 'result' variable = []
# - initiate 'amount_list' variable = []
# - initiate 'count' variable = 1
# - for every character as it appears in 'string',
#   IF character != next character, extend [letter, count], reset 'count' = 1
#   IF char equals next char... count += 1
# - return ''.join(result)

def edge_case(string):
    result = []

    for char in string:
        result.append


def compressed_string(string):
    result = []

    count = 1
    for idx in range(string):
        if string[idx] == string[idx - 1] or string[idx] == result[0]:
            count += 1
        else:
            result.extend([string[idx], count])
            count = 1

    return ''.join(result)
            


print(compressed_string('aabcccccaaa')) # a2b1c5a3
print(compressed_string('abcdefg')) # abcdefg