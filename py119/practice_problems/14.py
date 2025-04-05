def seven_eleven(integer):
    if integer <= 0:
        return 0
    
    return sum([num for num in range(1, integer)
                if num % 7 == 0 or num % 11 == 0])


print(seven_eleven(10) == 7)
print(seven_eleven(11) == 7)
print(seven_eleven(12) == 18)
print(seven_eleven(25) == 75)
print(seven_eleven(100) == 1153)
print(seven_eleven(0) == 0)
print(seven_eleven(-100) == 0)