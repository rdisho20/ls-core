def leading_substrings(string):
    return [string[:idx + 1] for idx in range(len(string))]

def substrings(string):
    return [
        substring
        for idx in range(len(string))
        for substring in leading_substrings(string[idx:])
    ]

def palindromes(string):
    '''
    new_list = []
    for elem in substrings(string):
        if len(elem) > 1:
            if elem[:len(elem)] == elem[len(elem)::-1]:
                new_list.append(elem)
    '''
    
    return [elem for elem in substrings(string)
            if len(elem) > 1 and elem == elem[::-1]]


print(palindromes('abcd') == [])                  # True
print(palindromes('madam') == ['madam', 'ada'])   # True

print(palindromes('hello-madam-did-madam-goodbye') ==
                  [
                      'll', '-madam-', '-madam-did-madam-',
                      'madam', 'madam-did-madam', 'ada',
                      'adam-did-mada', 'dam-did-mad',
                      'am-did-ma', 'm-did-m', '-did-',
                      'did', '-madam-', 'madam', 'ada', 'oo',
                  ])    # True

print(palindromes('knitting cassettes') ==
                  [
                      'nittin', 'itti', 'tt', 'ss',
                      'settes', 'ette', 'tt',
                  ])    # True



'''Consider using substrings function - LS

def substrings(string):
    return [
        substring
        for idx in range(len(string))
        for substring in leading_substrings(string[idx:])
    ]
'''