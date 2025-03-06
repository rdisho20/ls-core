def reverse_string(string):
    for char in string:
        string = char + string[:-1]

    return string

print(reverse_string("hello"))# == "olleh")

'''Explaination
character successfully being moved to front of string each time, but string as is is concatenated which is wrong...
...because the correct concatenation needs to account for the character being moved to the front each time, thus string[:-1]

'''