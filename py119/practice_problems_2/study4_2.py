# Create a function that takes a variable number of dictionaries as arguments. 
# The function should merge all dictionaries into a single dictionary. 
# If multiple dictionaries contain the same key, the value from the last dictionary 
# that contains that key should be used. Keys with None values should be discarded. 

'''
input: variable number of dictionaries
output: dictionary; merged dictionaries into single dictionary

E-rules:
use most recent value if same keys in dictionary
keys w/ non values discarded
I-rules:
if dictionary is empty, return an empty dictionary

'''   

def merge_dicts(*dictionaries):

    result = {key: value for dictionary in dictionaries
              for key, value in dictionary.items()
              if value}
    
    print(result)

    #return dictionaries

print(merge_dicts(
    {'a': 1, 'b': 2}, 
    {'b': 3, 'c': 4}, 
    {'c': None, 'd': 5}
) == {'a': 1, 'b': 3, 'd': 5})

print(merge_dicts(
    {'Python': 'fun', 'code': True}, 
    {'Python': 'challenging', 'loops': 'useful'}, 
    {'Python': None, 'recursion': 'powerful'}
) == {'code': True, 'loops': 'useful', 'recursion': 'powerful'})

print(merge_dicts({}) == {})
print(merge_dicts({'a': 1}, {'b': 2}) == {'a': 1, 'b': 2})