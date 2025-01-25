# X given 2 arguements, return 'True' if exactly one of its arguments = truthy
# defin a function taking 2 arguments
# - if arg 1 is true but arg 2 isn't, return true
# - if arge 1 isn't true but arg 2 is, return true
# - if arg 1 and arg 2 are true, return false
# - if arg 1 and arg 2 are both false, return false
def xor(arg1, arg2):
    if arg1 and arg2:
        return False
    elif not arg1 and not arg2:
        return False
    elif arg1 and not arg2:
        return True
    elif not arg1 and arg2:
        return True

print(xor(5, 0) == True)
print(xor(False, True) == True)
print(xor(1, 1) == False)
print(xor(True, True) == False)

# LS solution, much better than mine
"""
def xor(value1, value2):
    if (value1 and not value2) or (value2 and not value1):
        return True

    return False
"""