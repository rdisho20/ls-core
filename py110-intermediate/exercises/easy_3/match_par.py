def is_balanced(string):
    parentheses = [char for char in string if char in '(' or char in ')']

    if len(parentheses) % 2 == 1:
        return False

    for idx in range(len(parentheses) // 2):
        if ((parentheses[idx] in ')' and parentheses[-idx - 1] in '(')
            and idx == 0):
            return False
        if ((parentheses[idx] in '(' and parentheses[-idx - 1] in ')')
        or (parentheses[idx] in ')' and parentheses[-idx - 1] in '(')):
            continue

        return False

    return True

print(is_balanced("What (is) this?") == True)        # True
print(is_balanced("What is) this?") == False)        # True
print(is_balanced("What (is this?") == False)        # True
print(is_balanced("((What) (is this))?") == True)    # True
print(is_balanced("((What)) (is this))?") == False)  # True
print(is_balanced("Hey!") == True)                   # True
print(is_balanced(")Hey!(") == False)                # True
print(is_balanced("What ((is))) up(") == False)      # True

'''LS solution
# much cleaner because 1 iteration, and uses counter instead of data structure

def is_balanced(s):
    parens = 0
    for char in s:
        if char == "(":
            parens += 1
        elif char == ")":
            parens -= 1
        if parens < 0:
            return False
    return parens == 0
'''