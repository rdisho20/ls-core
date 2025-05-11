def invert_numbers(lst):
    result = []

    for number in lst:
        try:
            inverse = 1 / number
        except ZeroDivisionError as e:
            result.append(float('inf'))
            #print(f"ZeroDivisionError: {e}")
        except TypeError as e:
            print(f"TypeError: {e}")
        else:
            result.append(inverse)
        
    print(result)
    return result

# ZeroDivision
# TypeError

print(invert_numbers([1, 2, 3, 4, 5]) == [1.0, 0.5, 0.3333333333333333, 0.25, 0.2])  # True# 

result = invert_numbers([1, 2, 0, 4])
print(result[0:2] == [1.0, 0.5] and result[3] == 0.25 and result[2] == float('inf'))  # True# 

print(invert_numbers([-1, -2, -5]) == [-1.0, -0.5, -0.2])  # True
print(invert_numbers([0.5, 0.1, 2.5]) == [2.0, 10.0, 0.4])  # True
print(invert_numbers([]) == [])  # True