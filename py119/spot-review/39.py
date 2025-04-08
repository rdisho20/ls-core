# Sort the given strings in alphabetical order, case insensitive.

def sortme(lst):
    to_sort = [(string, string.casefold()) for string in lst]

    def sort(item):
        return item[1]
    
    to_sort.sort(key=sort)
    return [first for first, _ in to_sort]


print(sortme(["Hello", "there", "I'm", "fine"]) == ["fine", "Hello", "I'm", "there"])
print(sortme(["C", "d", "a", "Ba", "be"]) == ["a", "Ba", "be", "C", "d"])