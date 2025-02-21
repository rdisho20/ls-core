def count_banana(fruits_tup):
    count = 0
    for fruit in fruits_tup:
        if fruit == 'banana':
            count += 1
    
    return count


fruits = ("apple", "banana", "cherry", "date", "banana")

print(count_banana(fruits))

'''
LS solution

count = fruits.count('banana')
print(count)
'''