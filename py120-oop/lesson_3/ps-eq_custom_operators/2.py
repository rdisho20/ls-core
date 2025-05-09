class Cat:
    def __init__(self, name):
        self.name = name
    
    def __eq__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name.casefold() == other.name.casefold()
    
    def __ne__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name.casefold() != other.name.casefold()

class Dog:
    def __init__(self, name):
        self.name = name

fluffy = Cat('Fluffy')
fluffy2 = Cat('Fluffy')
merlin = Cat('Merlin')
spot = Dog('Spot')

print(fluffy == fluffy2)
print(fluffy == merlin)
print(spot == fluffy2)