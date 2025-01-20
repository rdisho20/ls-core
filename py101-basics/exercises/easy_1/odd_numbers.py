# given a range 1 - 100 (99) print all odd numbers
# for i in range increment 2 (for odd numbers)
# print i

#for i in range(1, 100, 2):
#    print(i)

# Further exploration
# given a range specified by user
# print all odd numbers

print('Type in starting number for range: ')
number1 = int(input())

print('Type in ending number for range (inclusive): ')
number2 = int(input())

print()

if number1 % 2 == 0:
    for i in range(number1 + 1, number2 + 1, 2):
        print(i)
else:
    for i in range(number1, number2 + 1, 2):
        print(i)