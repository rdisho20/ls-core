def is_palindrome(string):
    reversed_string = string[::-1]
    for idx in range(len(string)):
        if string[idx] != reversed_string[idx]:
            return False
    
    return True

# All of these examples should print True

print(is_palindrome('madam'))
print(is_palindrome('356653'))
print(is_palindrome('356635'))

# case matters
print(is_palindrome('Madam'))

# all characters matter
print(is_palindrome("madam i'm adam"))