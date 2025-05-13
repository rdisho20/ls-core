class TireMixin:
    def initialize_tire_list(self, tire_list):
        self.tires = tire_list
    
    def tire_pressure(self, tire_index):
        return self.tires[tire_index]
    
    def inflate_tire(self, tire_index, pressure):
        self.tires[tire_index] = pressure

class WheeledVehicle:
    def __init__(self, kilometers_per_liter, liters_of_fuel_capacity):
        self.fuel_efficiency = kilometers_per_liter
        self.fuel_capacity = liters_of_fuel_capacity
    
    def range(self):
        return self.fuel_capacity * self.fuel_efficiency

class Auto(TireMixin, WheeledVehicle):
    def __init__(self):
        super().__init__(50, 25.0)
        self.initialize_tire_list([30, 30, 32, 32])

class Motorcycle(TireMixin, WheeledVehicle):
    def __init__(self):
        super().__init__(80, 8.0)
        self.initialize_tire_list([20, 20])

class Catamaran(WheeledVehicle):
    def __init__(self,
                 kilometers_per_liter,
                 liters_of_fuel_capacity,
                 number_propellers,
                 number_hulls):
        super().__init__(kilometers_per_liter, liters_of_fuel_capacity)
        self.propellers = number_propellers
        self.hulls = number_hulls

'''
I didn't research what a Catamaran was, and turns out it is a water based vehicle without wheels
however, my implementation works if it was a vehicle with wheels but no tires.
'''