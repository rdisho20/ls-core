counter = 10

def decrease(number):
    global counter
    counter -= 1
    return counter

for _ in range(10):
    print(counter)
    decrease(counter)

print('LAUNCH!')

'''LS Solution

def decrease(counter):
    return counter - 1

counter = 10

for _ in range(10):
    print(counter)
    counter = decrease(counter)

print('LAUNCH!')
'''