# Create a function find_common_characters that takes a list of strings 
# and returns a set of characters that appear in all of the strings. 

'''
inputs: list of strings
outputs: set of characters, that appear in all the strings

I-rules:
input list can be empty

D-
set; get intersection (shared common chars) between the strings

A-
start w/ an empty set named 'result'
start w/ empty list named 'char_lists' ????

for each word and index in input list
    split the word into a list, then convert it to a set
    #convert back to list
    append the #list# of chars to 'char_lists'

for each element in 'char_lists'
    **if the current index is the last index, we need to check the first (use modulo?)**
    if current index equals the length of 'char_lists' - 1, need to check element @ first index
        get intersection of current element and first element assigned to 'current_intersection'
        check intersection of 'current_intersection' and 'result' assign to 'result'
    ELSE get the intersection of current element and the next element assigned to 'current_intersection'
        if result is empty set
            set result equal to 'current_intersection'
        ELSE check intersection of 'current_intersection' and result assign to result


cool, lock, cook
col, lock, cok

0: col & lock ...else- set empty => {o, c, l}
1: lock & cok ...else- else => {c, o, k} and {c, o, l}(result) => {c, o}
2 (chck frst): cok & col ...IF- => {c, o} and {c, o} => {c, o}
    
----
helo
world
h is in world? no
e is in world? no
l is in world? yes
o is in world? yes {l, o}

w is in helo? no
o is in helo? yes
r is in helo? no
l is in helo? yes
d is in helo? no 


convert each word to a set, then get the intersection of each,
add to 'intersection' as we go...

circular check?
'''

def find_common_characters(lst):
    result = set()
    char_list = []

    for word in lst:
        char_list.append(set(list(word)))
    
    for idx, element in enumerate(char_list):
        current_intersection = set()

        if idx == len(char_list) - 1:
            current_intersection.update(element & char_list[0])
            result.update(result & current_intersection)
        else:
            current_intersection.update(element & char_list[idx + 1])
            if not result:
                result.update(current_intersection)
            else:
                result = result & current_intersection

    return result

print(find_common_characters(["bella", "label", "roller"]) == {"e", "l"})
print(find_common_characters(["cool", "lock", "cook"]) == {"c", "o"})
print(find_common_characters(["hello", "world"]) == {"o", "l"})
print(find_common_characters([]) == set())
print(find_common_characters(["aaa", "bbb", "ccc"]) == set())

'''
Areas for improvement:

1. Simplified AlgorithmThe current implementation uses a circular checking 
approach that's unnecessarily complex. We can simplify this by using Python's 
set intersection functionality:

def find_common_characters(lst):
    if not lst:
        return set()
    
    # Use the first string's characters as our starting set
    result = set(lst[0])
    
    # Intersect with each remaining string
    for word in lst[1:]:
        result &= set(word)  # Same as result = result & set(word)
    
    return result

This approach is more straightforward - start with all characters from the first 
string, then reduce to only those that appear in all subsequent strings.

2. Avoiding Circular LogicYour implementation uses circular logic 
(checking the last element against the first), which isn't necessary for this problem:

def find_common_characters(lst):
    if not lst:
        return set()
        
    char_sets = [set(word) for word in lst]  # Use list comprehension for cleaner code
    
    # Start with first set and find intersection with all others
    result = char_sets[0]
    for char_set in char_sets[1:]:
        result &= char_set
        
    return result

'''
