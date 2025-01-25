# given 2 arguments, string and integer, repeat string as many times as int
# defin a function taking 2 params (string, number)
# - return concat 'string' a 'number' of times

def repeat(string, number):
    for _ in range(number):
        print(string)

repeat('Hello', 3)
repeat('Bruh', 10)