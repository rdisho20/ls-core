class TrackableMixin:
    def get_location(self):
        return (self.x, self.y)

    def update_location(self, x, y):
        self.x = x
        self.y = y

    def calculate_distance_to(self, other_trackable):
        x = self.x - other_trackable.x
        y = self.y - other_trackable.y
        return (x, y)

class ModeOfTransportation:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    @property
    def x(self):
        return self._x
    
    @x.setter
    def x(self, x):
        if not isinstance(x, int):
            raise TypeError(f"{x} is an incompatable data type")
        
        self._x = x
    
    @property
    def y(self):
        return self._y
    
    @y.setter
    def y(self, y):
        if not isinstance(y, int):
            raise TypeError(f"{y} is an incompatable data type")
        
        self._y = y

class Car(TrackableMixin, ModeOfTransportation):
    def __init__(self, x, y):
        super().__init__(x, y)

    def drive(self):
        print("drive dawg!")

class Bicycle(TrackableMixin, ModeOfTransportation):
    def __init__(self, x, y):
        super().__init__(x, y)

    def pedal(self):
        print("pedal dawg!")

class Helicopter(TrackableMixin, ModeOfTransportation):
    def __init__(self, x, y):
        super().__init__(x, y)

    def fly(self):
        print("fly dawg!")

car = Car(5, 4)
bicycle = Bicycle(8, 9)
helicopter = Helicopter(0, 7)

car.drive()
bicycle.pedal()
helicopter.fly()

print(car.get_location())
car.update_location(3, 2)
print(car.get_location())

print(bicycle.get_location())

print(helicopter.calculate_distance_to(bicycle))
print(helicopter.calculate_distance_to(car))
