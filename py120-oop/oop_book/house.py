from color_mixin import ColorMixin

class House(ColorMixin):

    def __init__(self, color):
        self.set_color(color)

house = House('sky blue')
print(house.get_color())

house.set_color('lavender')
print(house.get_color())