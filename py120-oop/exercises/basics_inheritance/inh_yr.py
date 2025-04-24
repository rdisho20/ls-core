class Vehicle:
    def __init__(self, year):
        self._year = year
    
    @property
    def year(self):
        return self._year

class Truck(Vehicle):
    def __init__(self, year):
        super().__init__(year)

class Car(Vehicle):
    def __init__(self, year):
        super().__init__(year)

truck1 = Truck(1994)
print(truck1.year)

car1 = Car(2006)
print(car1.year)