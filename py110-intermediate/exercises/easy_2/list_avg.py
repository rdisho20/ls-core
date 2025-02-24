def average(lst):
    total = 0

    for number in lst:
        total += number
    
    return total // len(lst)

print(average([1, 5, 87, 45, 8, 8]) == 25)        # True
print(average([9, 47, 23, 95, 16, 52]) == 40)     # True
print(average([7]) == 7)                          # True