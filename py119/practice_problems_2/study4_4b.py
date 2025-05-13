# Create a function that takes a string containing various types of 
# parentheses: `()`, `{}`, and `[]`.
# The function should determine if the string has balanced parentheses - 
# every opening parenthesis has a matching closing parenthesis in 
# the correct order. Return True if balanced, False if not.

'''
input: string containing various types of parentheses
output: boolean; True if balanced, False if not

E-rules:
every opening parentheses has matching closing parenthesis in correct order
I-rules:
empty strings allowed

D-
string as is, empty list for seen parentheses, 'open' set = to open parentheses, 'closed' set to closed parentheses

A-
start w/ empty list assigned to 'not_matched'
start w/ 'open', start w/ 'closed' (matching will be in the other list at same index)

For each bracket in string
    IF bracket is an open bracket
        add to 'seen' list

    IF bracket is a closed bracket
        set 'idx' to index position in 'closed'
        pop off the last one from 'seen' list
        AND check IF NOT matching 'idx' posit @ 'closed'
            return False

if 'not_matched'
    return False
if not 'not_matched'
    return True

    
--------    
[(])
[ - in open ['['], 1
( - in open ['[', '('], 2
] - in closed (so POP) ( doesn't match ], return False

({})
( - in open ['('], 1
{ - in open ['(', '{'], 2
} matches, 1
) matches, 0 TRUE

({} (checking if need 'not_matching' counter) -> don't need step tracker, 
just checked the 'seen' list and call it 'not_matched' instead
( - in open ['('], 1
{ - in open ['(', '{'], 2
} - in open ['('], 1
1... Return False
'''

def is_balanced(string):
    not_matched = []
    open = '({['
    closed = ')}]'

    for idx, char in enumerate(string):
        if char in open:
            not_matched.append(char)
        
        elif char in closed:
            idx = closed.index(char)
            match = not_matched.pop()

            if open[idx] != match:
                return False
    
    if not_matched:
        return False
    if not not_matched:
        return True

print(is_balanced("()") == True)
print(is_balanced("[({})]") == True)
print(is_balanced("{[]}()") == True)
print(is_balanced("(]") == False)
print(is_balanced("[(])") == False)
print(is_balanced("{[}") == False)
print(is_balanced("({}") == False)
print(is_balanced("") == True)
print(is_balanced("function(arg1, {key: 'value'})") == True)