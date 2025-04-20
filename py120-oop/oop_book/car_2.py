from color_mixin import ColorMixin

class Car(ColorMixin):

    def __init__(self, color):
        self.set_color(color)

car = Car('red')
print(car.get_color())

car.set_color('green')
print(car.get_color())