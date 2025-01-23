# given a name
# define a function that takes a name that is a string 'name'
# - if the last character (index) in the string == '!'
# -- print the greeting all uppercase
# - otherwise print all lowercase
def greeting(name):
    if name[-1] == "!":
        print(f"HELLO {name.upper()}!  WHY ARE YOU YELLING?!")
    else:
        print(f"Hello {name}.")

print("==> What is your name?")
user_name = input()

greeting(user_name)