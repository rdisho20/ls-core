class Animal:
    def __init__(self, color):
        self._color = color
    
    @property
    def color(self):
        return self._color

class Cat(Animal):
    pass

class Bird(Animal):
    pass

cat1 = Cat('Black')
print(cat1.color)

'''
MRO:
Cat
Animal


NOTE:
Note that color is a property which is an instance method,
not an instance variable. If we didn't define color as a
property, then the MRO would not get involved - instance
variables are tied to the object, not the class.
'''