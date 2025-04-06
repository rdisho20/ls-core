def is_palindrome(str):
    str = str.casefold()
    str_length = len(str)
    left = str[0:str_length // 2]

    if str_length % 2 == 0:
        right = str[-1:str_length // 2 - 1:-1]
    else:
        right = str[-1:str_length // 2:-1]
    
    return left == right


print(is_palindrome('racecar')) # true
print(is_palindrome('moom')) #true
print(is_palindrome('slick')) # false