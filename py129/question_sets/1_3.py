class SpeedMixin:
    def go_fast(self):
        print(f"I am a super fast {self.__class__.__name__}")

class LoadMixin:
    def carry_load(self):
        print(f"I can carry heavy loads as a {self.__class__.__name__}")

class Car(SpeedMixin):
    pass

class Truck(SpeedMixin, LoadMixin):
    pass

class SportsCar(Car):
    def go_fast(self):
        print(f"I am an EXTREMELY fast {self.__class__.__name__}")

regular_car = Car()
regular_car.go_fast()  # I am a super fast Car!

truck = Truck()
truck.go_fast()    # I am a super fast Truck!
truck.carry_load()  # I can carry heavy loads as a Truck!

sports_car = SportsCar()
sports_car.go_fast()  # I am an EXTREMELY fast SportsCar!