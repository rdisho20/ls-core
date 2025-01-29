def t_or_f(string):
    if string.endswith("!"):
        return True
    
    return False

str1 = "Come over here!"  # True
str2 = "What's up, Doc?"  # False

print(t_or_f(str1))
print(t_or_f(str2))

