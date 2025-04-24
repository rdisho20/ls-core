class TowableMixin:
    def tow(self):
        print('I can tow a trailer!')

class Truck(TowableMixin):
    pass

class Car:
    pass

truck1 = Truck()
truck1.tow()

car1 = Car()
car1.tow()