class Shape:
    def draw(self):
        print("draw Shape")

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def draw(self):
        print("draw Circle")
        print(f"{self.radius}")

class Rectangle(Shape):
    def __init__(self, width, length):
        self.width = width
        self.length = length

    def draw(self):
        print("draw Rectangle")
        print(f"{self.width}, {self.length}")

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def draw(self):
        print("draw Triangle")
        print(f"{self.a}, {self.b}, {self.c}")

def render_shapes(shapes):
    for shape in shapes:
        shape.draw()

# Your implementation should work with this:
shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 4, 5)]
render_shapes(shapes)  # Should call the appropriate draw method for each shape