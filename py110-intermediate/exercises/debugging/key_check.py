def get_key_value(my_dict, key):
    if my_dict.get(key):
        return my_dict[key]
    else:
        return None

print(get_key_value({"a": 1}, "b"))

'''Explanation:
using indexing syntax to access key does not account for if it exists or not,
and if the key doesn't exist a KeyError is thrown, and the code terminates
'''