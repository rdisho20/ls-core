lst = [
    {'a': [1, 2, 3]},
    {'b': [2, 4, 6], 'c': [3, 6], 'd': [4]},
    {'e': [8], 'f': [6, 10]},
]

def check_even(dict):
    return all(item % 2 == 0
               for value in dict.values()
               for item in value)

def dict_comp(lst):
    result = [{key: value for elem in lst
              for key, value in elem.items()
              if check_even(elem)}]
    
    return result

print(dict_comp(lst))

'''

LS Soltuion # 1
def all_even(dictionary):
    for values in dictionary.values():
        if not all([num % 2 == 0 for num in values]):
            return False

    return True

result = [val for val in lst if all_even(val)]
print(result)

----

LS Solution # 2

# helper function to check each list value returns 'True' if all even
def list_is_even(lst):
    return all([num % 2 == 0 for num in lst])

# helper function to check each dictionary if lists contain all 'True' values
def all_even(dictionary):
    lists_are_even = [list_is_even(list_value)
                      for list_value in dictionary.values()]
    return all(lists_are_even)

# list comprehension FILTERING for lists with ALL 'True' values
result = [dictionary for dictionary in lst
                     if all_even(dictionary)]
print(result)

'''