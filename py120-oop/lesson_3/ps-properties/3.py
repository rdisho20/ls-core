class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height

    @property
    def width(self):
        return self._width
    
    @width.setter
    def width(self, width):
        print("NO CHANGE 4 U, HAHAHA")
    
    @property
    def height(self):
        return self._height
    
    @height.setter
    def height(self, height):
        print('no bueno!')

boom = Rectangle(10, 20)
boom.width = 100
boom.height = 200
print(boom.width)
print(boom.height)