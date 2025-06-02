import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * (self.radius ** 2)

    # Circumference
    def perimeter(self):
        return (2 * math.pi) * self.radius

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return (self.length * 2) + (self.width * 2)

class Triangle:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def area(self):
        s = self.perimeter() / 2
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))

    # Heron's formula
    def perimeter(self):
        return self.a + self.b + self.c


def calculate_measurements(shapes):
    for shape in shapes:
        print(f"Area: {shape.area():.2f}, Perimeter: {shape.perimeter():.2f}")

shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 4, 5)]
calculate_measurements(shapes)