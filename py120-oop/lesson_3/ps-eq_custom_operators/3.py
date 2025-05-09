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
    
    def __lt__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name.casefold() < other.name.casefold()

    def __le__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name.casefold() <= other.name.casefold()

    def __gt__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name.casefold() > other.name.casefold()

    def __ge__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name.casefold() >= other.name.casefold()

class Dog:
    def __init__(self, name):
        self.name = name

fluffy = Cat('Fluffy')
fluffy2 = Cat('Fluffy')
merlin = Cat('Merlin')
spot = Dog('Spot')


print(fluffy <= merlin)
print(fluffy2 < merlin)
print(merlin < fluffy2)
print(merlin <= fluffy)