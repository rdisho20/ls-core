def my_function(string):
    str_list = string.split()

    cap_sorted = [word.capitalize() for word in str_list]
    cap_sorted.sort()

    return ' '.join(cap_sorted)

print(my_function('My name is John Smith'))