# given a list, return a list containing every other element of original list
# define a function taking 1 arguement (lst)
# - define 'new list'
# - while loop while 'index' is less than the length of 'lst' arg:
# -- append item at 'index' to 'new list'
# -- increment list by 2
# - return 'new list'

# - define variable 'new_list'
# - iterate through 'list' starting w/ [1] and incrementing by 2
# -- append each item to new_list
# -- once cannot iterate anymore, return new_list
# w/ sliceing
"""
def oddities(ls):
    return ls[0:len(ls):2]
"""

def oddities(ls):
    result = []
    for i in range(0, len(ls), 2):
        result.append(ls[i])

    return result

# further exploitation!!
def evenies(ls):
    return ls[1::2]

print(oddities([2, 3, 4, 5, 6]) == [2, 4, 6])  # True
print(oddities([1, 2, 3, 4]) == [1, 3])        # True
print(oddities(["abc", "def"]) == ['abc'])     # True
print(oddities([123]) == [123])                # True
print(oddities([]) == [])                      # True

print(oddities([2, 3, 4, 5, 6]))
print(oddities([1, 2, 3, 4]))
print(oddities(["abc", "def"]))
print(oddities([123]))
print(oddities([]))

print(evenies([2, 3, 4, 5, 6]))
print(evenies([1, 2, 3, 4]))
print(evenies(["abc", "def"]))
print(evenies([123]))
print(evenies([]))