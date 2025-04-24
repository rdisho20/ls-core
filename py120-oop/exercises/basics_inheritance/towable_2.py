class Vehicle:
    def __init__(self, year):
        self._year = year

    @property
    def year(self):
        return self._year

class TowingMixin:
    def tow(self):
        return 'I can tow a trailer!'

class Truck(TowingMixin, Vehicle):
    pass

class Car(Vehicle):
    pass

truck1 = Truck(1994)
print(truck1.year)
print(truck1.tow())

car1 = Car(2006)
print(car1.year)