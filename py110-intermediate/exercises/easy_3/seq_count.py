def sequence(count, starting_num):
    result = []
    if count == 0:
        return result
    
    result.append(starting_num)

    loop_count = 1
    while loop_count < count:
        result.append(starting_num * (loop_count + 1))
        loop_count += 1
    
    return result

print(sequence(5, 1) == [1, 2, 3, 4, 5])          # True
print(sequence(4, -7) == [-7, -14, -21, -28])     # True
print(sequence(3, 0) == [0, 0, 0])                # True
print(sequence(0, 1000000) == [])                 # True

'''LS Solution
def sequence(count, start_num):
    return [start_num * num for num in range(1, count + 1)]
'''