# Create a function called `can_form_target` that takes a list of strings and a target string,
# and returns `True` if the union of character sets from any combination of the input strings can form the target string.    

'''
input: list of strings & target string
output: boolean; True if union of character sets from any combination of input strings form target string

I-rules:
target string is at least 3 characters long
input list contains at least 2 sets of characters

A-
start w/ strings in 'string_list' concatinated to one string (seperate function)

string concat function:
start w/ empty string 'result'
for every element in sting_list
    for each character in element
        concat to 'result'

return result
----

for each character in the 'target' string
    if the character is not in the string
        return False

If loop doesn't return False...
return True

----

or make dictionary, for each character in dictionary, if it's count is greater than the value of the key; return False
'''

def concat_str_list(string_list):
    result = ""
    for string in string_list:
        for char in string:
            result += char
    
    return result

def get_char_count(string):
    dictionary = {}
    for char in string:
        dictionary[char] = dictionary.get(char, 0) + 1
    
    return dictionary

def can_form_target(string_list, target):
    check_string = concat_str_list(string_list)
    check_string_char_count = get_char_count(check_string)
    target_char_count = get_char_count(target)
    
    for char, count in target_char_count.items():
        if char not in check_string_char_count:
            return False

        if char in check_string_char_count:
            if count > check_string_char_count[char]:
                return False

    # if all cases pass the above tests, should return True
    return True
    
print(can_form_target(["ab", "cd", "ef"], "acef") == True)
print(can_form_target(["ab", "cd", "ef"], "aceg") == False)
print(can_form_target(["hello", "world"], "helloworld") == True)
print(can_form_target(["hello", "world"], "helloworldz") == False)
print(can_form_target(["abc", "def", "ghi"], "adg") == True)