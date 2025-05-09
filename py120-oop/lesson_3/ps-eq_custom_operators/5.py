class Silly:
    def __init__(self, value):
        if isinstance(value, int):
            self.value = value
        else:
            self.value = str(value)
        
    def __add__(self, other):
        if not isinstance(other, int) and not isinstance(other, str):
            return NotImplemented
        
        try:
            x = int(self.value)
            y = int(other)

            return Silly(x + y)

        except ValueError:
            return Silly(str(self.value) + str(other))

    def __str__(self):
        return f'Silly({repr(self.value)})'
    
print(Silly('abc') + 'def')        # Silly('abcdef')
print(Silly('abc') + 123)          # Silly('abc123')
print(Silly(123) + 'xyz')          # Silly('123xyz')
print(Silly('333') + 123)          # Silly(456)
print(Silly(123) + '222')          # Silly(345)
print(Silly(123) + 456)            # Silly(579)
print(Silly('123') + '456')        # Silly(579)

'''
    def __add__(self, other):
        

        if str(self.value).isdigit() and str(other).isdigit():
            return Silly(int(self.value) + int(other))
        else:
            return Silly(str(self.value) + str(other))
'''
