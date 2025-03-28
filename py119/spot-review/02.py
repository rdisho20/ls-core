'''
Write a function that takes a list of integers as input and counts the number of
pairs in the list. A pair is defined as two equal integers separated by some
other integer(s).
'''
def pairs(lst):
    pair_total = 0
    checked = set()

    for num in lst:
        count = lst.count(num)

        if num not in checked:
            checked.add(num)

            if count % 2 == 0:
                pair_total += (count // 2)
            elif count % 2 == 1 and count >= 3:
                pair_total += (count // 2)

        elif num in checked:
            continue
    
    return pair_total


print(pairs([1, 2, 5, 6, 5, 2])) # 2
print(pairs([1, 2, 2, 20, 6, 20, 2, 6, 2])) # 4
