# X given 2 strings, determine their length, concatinating short long short
# X assume strings are of different lengths
# X define function taking 2 strings as parameters
# - get length of each, assigned to variables
# - compare lengths, assigning values to 'long' and 'short'
# - perform concat expression 'short' 'long' 'short' and return the value
# X get string input from user twice, assigned to variables
# X catch errors of input if any
# X invoke function with user input as arguments

def short_long_short(string1, string2):
    word_list = []
    if len(string1) > len(string2):
        long = string1
        short = string2
    else:
        long = string2
        short = string1
    
    word_list.append(short)
    word_list.append(long)
    word_list.append(short)
    
    return ''.join(word_list)

def invalid_entry(string):
    check = False

    while check == False:
        if not string:
            print("You entered nothing. Please, try again:")
            string = input()          
        elif string.count(" ") == len(string):
            print("You mereley entered whitespace. Please, try again:")
            string = input()
        elif string.isnumeric():
            print("Do not enter a number. Please, try again:")
            string = input()
        else:
            check = True

print("Please provide a string:")
user_input1 = input()
invalid_entry(user_input1)

print("Please provide another string:")
user_input2 = input()
invalid_entry(user_input2)

print(short_long_short(user_input1, user_input2))