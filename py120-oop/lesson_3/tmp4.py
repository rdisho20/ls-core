def foo1():

    #raise ZeroDivisionError('Got ZeroDivisionError')
    # raise ValueError('Got ValueError')
    # raise AttributeError('Got AttributeError')
    print('We should not be here')

def foo2():
    try:
        foo1()
    except ZeroDivisionError:
        print('Got ZeroDivisionError')

def foo3():
    try:
        foo2()
    except ValueError:
        print('Got ValueError')

foo3()