# Write a function triple_double(num1, num2) which takes numbers num1 and num2
# and returns 1 if there is a straight triple of a number at any place in num1
# and also a straight double of the same number in num2. If this isn't the case,
# return 0

def triple_double(num1, num2):
    num1 = str(num1)
    num2 = str(num2)
    counter = 0

    for idx in range(0, len(num1)):
        if idx == 0:
            continue

        elif num1[idx] == num1[idx - 1]:
            if idx == 1:
                counter += 2
            counter += 1

            if counter == 3:
                counter = 0
                break

        elif idx == len(num1) - 1 and counter != 3:
            return 0

        else:
            counter = 0

    for idx in range(0, len(num2)):
        if idx == 0:
            continue

        elif num2[idx] == num2[idx - 1] and num2[idx] != num2[idx + 1]:
            counter += 2

            if counter == 2:
                return 1


print(triple_double(12345, 12345) == 0)
print(triple_double(666789, 12345667) == 1)

'''
def triple_double(num1, num2):
    num1_str = str(num1)
    num2_str = str(num2)
    
    # First find any triple digits in num1
    for digit in '0123456789':
        # Check if digit appears three times consecutively in num1
        if digit * 3 in num1_str:
            # Then check if same digit appears twice consecutively in num2
            if digit * 2 in num2_str:
                return 1
    
    return 0

This approach uses string multiplication and the in operator to elegantly check for consecutive occurrences without complex counter logic.
'''