class Person:
    def __init__(self, name):
        self.name = name
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, name):
        if not isinstance(name, str):
            raise TypeError("Must be alphanumeric string.")
        if name == '':
            raise ValueError("String must not be empty.")
        
        self._name = name

jack = Person('Jack')
print(jack.name)

linda = Person('Linda')
print(linda.name)                   # Linda

linda.name = 'Lin'
print(linda.name)                   # Lin

linda.name = ''