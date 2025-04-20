class Vehicle:

    def __init__(self, wheels):
        self._wheels = wheels
        print(f'I have {self._wheels} wheels.')
    
    def drive(self):
        print('I am driving.')

class Car(Vehicle):

    def __init__(self):
        print('Creating a car.')
        super().__init__(4)
    

class Truck(Vehicle):
    
    def __init__(self):
        print('Creating a truck.')
        super().__init__(18)

class Motorcycle(Vehicle):

    def __init__(self):
        print('Creating a motorcycle')
        super().__init__(2)

    def drive(self):
        super().drive()
        print('No!  I am riding!')


car = Car()
car.drive()
print()

truck = Truck()
truck.drive()
print()

motorcycle = Motorcycle()
motorcycle.drive()