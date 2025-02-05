# given a string, return dictionary where keys are characters, and their values are amount of times appear
# define function 'generate_dict' passing in a string value
# define empty dictionary variable 'result'
# - for char in string
# -- result[char] = string.count(char)
# - return result
import pprint

def generate_dict(string):
    result = {}

    for char in string:
        result[char] = string.count(char)
    
    return result

my_string = "hello world hello sun"

pprint.pprint(generate_dict(my_string))