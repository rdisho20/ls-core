class Light:
    def __init__(self, brightness, color):
        self.brightness = brightness
        self.color = color
    
    def status(self):
        return (f"I have a brightness level of {self.brightness} "
                f"and a color of {self.color}")

my_light = Light(50, "Red")
print(my_light.status())