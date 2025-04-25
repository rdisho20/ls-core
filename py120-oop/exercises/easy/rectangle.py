class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height

    @property
    def width(self):
        return self._width
    
    @property
    def height(self):
        return self._height
    
    @property
    def area(self):
        return self._width * self._height

rect = Rectangle(4, 5)

print(rect.width == 4)
print(rect.height == 5)
print(rect.area == 20)