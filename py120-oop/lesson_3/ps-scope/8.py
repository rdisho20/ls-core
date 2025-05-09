class Car:
    manufacturer = 'Toyota'

    def __init__(self, manufacturer):
        self.manufacturer = manufacturer

    def show_manufacturer(self):
        print(self.__class__.manufacturer)
        print(self.manufacturer)

car1 = Car('Lexus')
car1.show_manufacturer()