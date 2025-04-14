# How do we create a class and object in Python?
# My answer:
# define a class with a name using PascalCase, and initialize it
# - w/ __init__ constructor function
# passing it 2 parameters, 1 for referencing itself, and one for 
# - retrieving what it is called or its 'name'

class Vehicles:
    def __init__(self, name):
        self.name = name
        type_name = self.__class__.__name__
        print(f'I am a {name}, of type {type_name}')

tank = Vehicles('Big Tank')
sedan = Vehicles('Sedan')
pickup_250 = Vehicles('250 Pickup Truck')