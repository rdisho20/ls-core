class Shape:
    shape_count = 0

    def __init__(self, name, sides):
        self.name = name
        self.sides = sides
        self.__class__.shape_count += 1
    
    @classmethod
    def get_shape_count(cls):
        return cls.shape_count

    def describe(self):
        return f"This is a {self.name} with {self.sides} sides"

    @classmethod
    def regular_shapes(cls):
        return cls.shapes

    @classmethod
    def add_regular_shape(cls, name):
        try:
            if cls.shapes:
                cls.shapes.append(name)
        except AttributeError:
            cls.shapes = []
            cls.shapes.append(name)


# Should start with 0 shapes
print(Shape.get_shape_count())  # 0

# Create some shapes
triangle = Shape("triangle", 3)
square = Shape("square", 4)
pentagon = Shape("pentagon", 5)

# Count should now be 3
print(Shape.get_shape_count())  # 3

# Test the describe method
print(triangle.describe())  # This is a triangle with 3 sides
print(square.describe())    # This is a square with 4 sides


# Add some regular shapes and test the class method
Shape.add_regular_shape("square")
Shape.add_regular_shape("equilateral triangle")
print(Shape.regular_shapes())  # ['square', 'equilateral triangle']
