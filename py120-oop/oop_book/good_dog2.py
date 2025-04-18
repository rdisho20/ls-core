class GoodDog:
    def __init__(self, name, age): # added the state 'name', and 'age'
        self._name = name
        self._age = age
    
    def speak(self):
        return f'{self._name} says Arf!'
    
    def name(self):
        return self._name
    
    def set_name(self, new_name):
        if not isinstance(new_name, str):
            raise TypeError('Name must be a string')
        self._name = new_name
    
    def age(self):
        return self._age

sparky = GoodDog('Sparky', 5)
print(sparky.speak())

rover = GoodDog('Rover', 3)
print(rover.speak())