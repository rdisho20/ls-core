# X given a positive integer, return a string alternating '0' and '1'
# define a function that takes a positive integer
# - if the number is even
# -- for the length of the string / 2 print "10"
# - else if the number is odd
# -- for the length of the string
# --- if the number is odd print '1'
# --- elif the number is even print '0'

def stringy(number):
    result = ''
    if number % 2 == 0:
        for _ in range(number // 2):
            result += '10'
        
        return result
    
    elif number % 2 == 1:
        for i in range(1, number + 1):
            if i % 2 == 1:
                result += '1'
            elif i % 2 == 0:
                result += '0'
        
        return result

print(stringy(6) == "101010")           # True
print(stringy(9) == "101010101")        # True
print(stringy(4) == "1010")             # True
print(stringy(7) == "1010101")          # True

# LS Solution
def stringy(size):
    result = ""
    for idx in range(size):
        digit = '1' if idx % 2 == 0 else '0'
        result += digit

    return result