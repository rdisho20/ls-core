# X given a number, calculate sum of all numbers between 1 and a given number
# Create a range to get all numbers from 1 up to given number
# iterate through numbers in range, adding each number to var 'total'
# return 'total'

def sum(num):
    total = 0

    for num in range(1, num + 1):
        total += num

    return f'Total: {total}'

print('Enter number 1/4: ')
print(sum(int(input())))

print('Enter number 2/4: ')
print(sum(int(input())))

print('Enter number 3/4: ')
print(sum(int(input())))

print('Enter number 4/4: ')
print(sum(int(input())))