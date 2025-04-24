class Vehicle:
    def start_engine(self):
        return 'Ready to go!'

class Truck(Vehicle):
    def start_engine(self, speed):
        return super().start_engine() + f'Drive {speed}, please!'

truck1 = Truck()
print(truck1.start_engine('fast'))

truck2 = Truck()
print(truck1.start_engine('slow'))