class Cat:
    
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name
    
    def __repr__(self):
        return f'Cat({repr(self.name)})'
    
    def __eq__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented

        return self.name == other.name
    
    def __ne__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented

        return self.name != other.name
    
    def __lt__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name < other.name
    
    def __le__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name <= other.name
    
    def __gt__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name > other.name
    
    def __ge__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        
        return self.name >= other.name


fuzzy = Cat('Fuzzy')
print(fuzzy)
print(str(fuzzy))
print(repr(fuzzy))

fluffy = Cat('Fluffy')
fluffy2 = Cat('Fluffy')
whiskers = Cat('Whiskers')

print(fuzzy == fluffy)
print(fluffy == fluffy)
print(fuzzy != fluffy)
print(fuzzy != fuzzy)

print(fluffy == fluffy2)
print(fluffy != fluffy2)

print(fluffy < whiskers)
print(fluffy <= whiskers)
print(fluffy <= fluffy2)
print(fluffy > whiskers)
print(fluffy >= whiskers)
print(fluffy >= fluffy2)