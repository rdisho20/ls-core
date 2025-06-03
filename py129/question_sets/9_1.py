class Car:
    def start(self):
        return "Engine starting"

    def stop(self):
        return "Engine stopped"
    
    def drive(self):
        return "Car is driving"

class Bicycle:
    def start(self):
        return "Start pedaling"
    
    def stop(self):
        return "Stop pedaling"

    def drive(self):
        return "Bicycle is moving"

class Motorcycle:
    def start(self):
        return "Engine starting"
    
    def stop(self):
        return "Engine stopped"
    
    def drive(self):
        return "Motorcycle is riding"


# Poorly designed function with type checking
def control_vehicle(vehicle):
    print(vehicle.start())
    print(vehicle.drive())
    print(vehicle.stop())
    print()

car = Car()
bicycle = Bicycle()
motorcycle = Motorcycle()

control_vehicle(car)
control_vehicle(bicycle)
control_vehicle(motorcycle)