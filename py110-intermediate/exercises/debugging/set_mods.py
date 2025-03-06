data_set = {1, 2, 3, 4, 5}

for item in data_set.copy():
    if item % 2 == 0:
        data_set.remove(item)

print(data_set)

'''LS Solution
data_set = {item for item in data_set if item % 2 != 0}
'''