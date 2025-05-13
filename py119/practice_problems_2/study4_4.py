# Create a function that takes a string containing various types of 
# parentheses: `()`, `{}`, and `[]`.
# The function should determine if the string has balanced parentheses - 
# every opening parenthesis has a matching closing parenthesis in 
# the correct order. Return True if balanced, False if not.

'''
input: string containing various types of parentheses
output: boolean, if balanced return True, False if not

E-rules:
- every opening parentheses has matching closing parentheses in correct order
I-rules:
- if string empty, it is balanced
- input string can contain other characters

D-
string to iterate, list to hold brackets seen, 
mayB dictionary to hold matching brackets (keys closed, values open)
    check the value at the key if equal to popped value

A-
start with string named 'open'
start with string named 'closed'
start with empty list named 'seen'
start w/ dictionary w/ matches {'(': ')', '[': ']', '{': '}'}

For each character that is `()`, `{}` or `[]`
    SET a 'steps' counter tracking each space where there isn't matching bracket that follows (dunno if need)
    IF in 'closed' AND steps counter == 0...
        return FALSE (this way, deliberately account for not matching exclusively, since steps increment later!)

    IF in 'open', is there a matching one next?
        IF NOT, increment 'steps counter' by 1
        and append to seen list

        ############

    IF current close bracket character equals last matching (popped off list == value at current close bracket char key):
        Decrement 'steps'

    IF 'steps' counter greater than the length of the input string halved
        Return False, because havn't closed enough matching brackets at apparent halfway point


[({})]
[ - [( 1, ({ 2, {} 1, }) 2, X

[({})]

set{ [, (, { }
[( 1, ({ 2, {} 1, })

[({})
if steps = 1 [, 2 (, {, } 
len(5) // 2 = 2

'''

def is_balanced(string):
    matches = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    open = '([{'
    closed = ')]}'
    seen = []



# print(is_balanced("()") == True)
# print(is_balanced("[({})]") == True)
# print(is_balanced("{[]}()") == True)
print(is_balanced("(]") == False)
print(is_balanced("[(])") == False)
print(is_balanced("{[}") == False)
# print(is_balanced("") == True)
# print(is_balanced("function(arg1, {key: 'value'})") == True)