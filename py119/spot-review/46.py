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

            print(num1[idx], counter)

            if counter == 3:
                counter = 0
                break

        elif idx == len(num1) - 1 and counter != 3:
            return 0

        else:
            counter = 0
    
    print("passed out first loop dilly dig")

    for idx in range(0, len(num2)):
        if idx == 0:
            continue

        elif num2[idx] == num2[idx - 1]:
            if idx == 1:
                counter += 2
            counter += 1

            print(num2[idx], counter)

            if counter == 2:
                return 1
    
    print(counter) # ends at 1... hmm #########################



print(triple_double(12345, 12345) == 0)
print(triple_double(666789, 12345667) == 1)