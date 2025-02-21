def check_alphanum(string):
    new_string = ''

    for char in string:
        if char.isalnum():
            new_string += char

    return new_string

def is_real_palindrome(string):
    new_string = check_alphanum(string).casefold()
    reversed_string = new_string[::-1].casefold()

    for idx in range(len(new_string)):
        if new_string[idx] != reversed_string[idx]:
            return False

    return True

# All of these examples should print True

print(is_real_palindrome('madam') == True)           # True
print(is_real_palindrome('356653') == True)          # True
print(is_real_palindrome('356635') == False)         # True
print(is_real_palindrome('356a653') == True)         # True
print(is_real_palindrome('123ab321') == False)       # True

# case doesn't matter
print(is_real_palindrome('Madam') == True)           # True

# only alphanumerics matter
print(is_real_palindrome("Madam, I'm Adam") == True) # True