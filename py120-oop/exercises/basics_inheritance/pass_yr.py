class Vehicle:
    def __init__(self, year):
        self._year = year
    
    @property
    def year(self):
        return self._year

class Truck(Vehicle):
    def __init__(self, year, bed_type):
        super().__init__(year)
        self._bed_type = bed_type
    
    @property
    def bed_type(self):
        return self._bed_type

class Car(Vehicle):
    pass

truck1 = Truck(1994, 'Short')
print(truck1.year)
print(truck1.bed_type)

car1 = Car(2006)
print(car1.year)
print(car1.bed_type)