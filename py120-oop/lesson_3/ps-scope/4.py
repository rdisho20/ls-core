class Dog:
    def __init__(self, breed=None):
        self._breed = breed
    
    def get_breed(self):
        return self._breed

spot = Dog('Golden Retriever')
bolt = Dog('Poodle')
dog3 = Dog()

print(spot.get_breed())
print(bolt.get_breed())

dog3._breed = "St. Bernard"
print(dog3.get_breed())