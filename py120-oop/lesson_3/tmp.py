import math

class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def diameter(self):
        return 2 * self.radius
    
    @diameter.setter
    def diameter(self, diameter):
        self.radius = diameter / 2
    
    @property
    def circumference(self):
        return 2 * math.pi * self.radius
    
    @circumference.setter
    def circumference(self, circumference):
        self.radius = circumference / (2 * math.pi)
    
    @property
    def area(self):
        return math.pi * (self.radius ** 2)
    
    @area.setter
    def area(self, area):
        self.radius = math.sqrt(area / math.pi)
    
    def print(self):
        print(f'{self.radius=}')
        print(f'{self.diameter=}')
        print(f'{self.circumference=}')
        print(f'{self.area=}')
        print()

circle = Circle(10)
circle.print()