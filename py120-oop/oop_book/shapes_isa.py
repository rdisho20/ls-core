class Shape:

    def area(self):
        pass

class Rectangle(Shape):

    def __init__(self, width, height):
        self._width = width
        self._height = height
    
    def set_width(self, width):
        self._width = width
    
    def set_height(self, height):
        self._height = height
    
    def area(self):
        my_area = self._width * self._height
        print(f'area is {my_area}')
    
class Square(Shape):

    def __init__(self, size):
        self._size = size
    
    def set_size(self, size):
        self._size = size
    
    def area(self):
        my_area = self._size * self._size
        print(f'area is {my_area}')


square = Square(7)
square.area()

square.set_size(12)
square.area()

square.width = 5
square.height = 9
square.area()
