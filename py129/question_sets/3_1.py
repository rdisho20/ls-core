class Vehicle:
    total_vehicles = 0

    def __init__(self, make, model):
        self.make = make
        self.model = model
        Vehicle.total_vehicles += 1

class Car(Vehicle):
    total_vehicles = 0

    def __init__(self, make, model):
        super().__init__(make, model)
        Car.total_vehicles += 1


# Test cases:
car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")
vehicle1 = Vehicle("Unknown", "Generic")

print(Vehicle.total_vehicles)    # Should print 3
print(Car.total_vehicles)        # Should print 2

# Also verify that the make and model are properly set
print(car1.make, car1.model)     # Should print "Toyota Corolla"