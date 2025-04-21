from signal_mixin import SignalMixin

class Vehicle:
    '''
    class variable here, since test code does not pass in a 'counter' arguement
    '''
    counter = 0

    def __init__(self):
        Vehicle.counter += 1

    @classmethod
    def vehicles(cls):  # class method so no need to look for argument
        return Vehicle.counter

class Car(SignalMixin, Vehicle): # get into habit of def __init__ even though main vehicle object initialized in superclass
    
    def __init__(self):
        super().__init__()

class Truck(SignalMixin, Vehicle):
    
    def __init__(self):
        super().__init__()

class Boat(Vehicle):
    
    def __init__(self):
        super().__init__()


print(Car.vehicles())
car1 = Car()
print(Car.vehicles())
car2 = Car()
car3 = Car()
car4 = Car()
print(Car.vehicles())
truck1 = Truck()
truck2 = Truck()
print(Truck.vehicles())
boat1 = Boat()
boat2 = Boat()
print(Boat.vehicles())


#4 print MOR method resolution order
print(Car.mro())
print(Truck.mro())
print(Boat.mro())
print(type.__dict__)


'''3
car1.signal_left()       # Signalling left
truck1.signal_right()    # Signalling right
car1.signal_off()        # Signal is now off
truck1.signal_off()      # Signal is now off
'''