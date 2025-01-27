# X given a positive integer, print triangle w/ 'n' lines
# define function taking positive integer
# - define a variable named 'result'
# - create iterable for index in range(n, 0) counting down
# -- at each line concat to result (" " * index) - 1 + '*'
# - print 'result'

def triangle(number):
    result = ""

    for idx in range(number, 0, -1):
        result += ((" " * (idx - 1)) + ('*' * (number + 1 - idx)) + "\n")
    
    print(result)

triangle(5)
triangle(9)

# LS Solution
def triangle(height):
    for num in range(1, height + 1):
        spaces = height - num
        stars = num
        print(f'{" " * spaces}{"*" * stars}')