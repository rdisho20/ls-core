# given a list of nested lists, flatten the list
# define a function that takes a list as a parameter
# result = []
# create for loop iterating through each index of list
# - if index is a list element, create for loop iterating through
#   each element of nested list
# -- append element to new list 'result'
# - else: append element to new list 'result'
# return 'result'

def flatten_list(nested_list):
    result = []

    for element in nested_list:
        if isinstance(element, list):
            for nested_el in element:
                if isinstance(nested_el, list):
                    for nne in nested_el:
                        result.append(nne)
                else:
                    result.append(nested_el)
        else:
            result.append(element)

    return result


print(flatten_list([1, [2, 3, [4, 5]], 6, [7, 8]]))  # Should print [1, 2, 3, 4, 5, 6, 7, 8]