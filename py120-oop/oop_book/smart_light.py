from color_mixin import ColorMixin

class SmartLight(ColorMixin):

    def __init__(self, color):
        self.set_color(color)

smart_light = SmartLight('cool white')
print(smart_light.get_color())

smart_light.set_color('goldenrod')
print(smart_light.get_color())