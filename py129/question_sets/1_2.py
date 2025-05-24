class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def description(self):
        return f"{self.make} {self.model} ({self.year})"

    def get_age(self):
        current_year = 2023
        return current_year - self.year

class Car(Vehicle):
    def __init__(self, make, model, year, doors):
        super().__init__(make, model, year)
        self.doors = doors

    def description(self):
        return f"{super().description()} - {self.doors} doors"

class Motorcycle(Vehicle):
    def __init__(self, make, model, year, engine_size):
        super().__init__(make, model, year)
        self.engine_size = engine_size
    
    def description(self):
        return f"{super().description()} - {self.engine_size}cc"


vehicle = Vehicle("Generic", "Vehicle", 2020)
print(vehicle.description())  # Generic Vehicle (2020)
print(vehicle.get_age())      # 3

car = Car("Toyota", "Camry", 2018, 4)
print(car.description())      # Toyota Camry (2018) - 4 doors
print(car.get_age())          # 5

motorcycle = Motorcycle("Honda", "CBR", 2021, 600)
print(motorcycle.description())  # Honda CBR (2021) - 600cc
print(motorcycle.get_age())      # 2