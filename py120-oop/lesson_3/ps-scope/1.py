class Dog:
    def __init__(self, breed):
        self._breed = breed
    
    def get_breed(self):
        return self._breed

spot = Dog('Golden Retriever')
bolt = Dog('Poodle')

print(spot.get_breed())
print(bolt.get_breed())