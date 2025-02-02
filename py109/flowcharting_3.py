# X given a string (password), print 'valid' if passes 4 pieces of criteria
# display message to user to enter a password that's:
# 1. minimum length :: 10 characters
# 2 & 3. has uppercase and lowercase characters
# 4. has at least one number
# get input from user
# define function 'password_validator' taking 1 parameter 'input'
# set variable 'password' = to 'True'
# while password is true
# call function 'password_validator' passing in the input
# - if the length of the input is >= 10 AND
# - if count of uppercase chars is > 0 AND
# - if count of lwrcase chars is > 0 AND
# - if number count > 0
# -- return True
# - else: return False