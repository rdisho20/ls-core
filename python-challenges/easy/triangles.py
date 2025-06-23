'''
P-
input: 3 integers (sides of triangle)
output: display type of triangle in terminal

E-rules
dealing w/ equilateral, isosceles, scalene
-> triangle, all sides must be length > 0
-> trianlge, sum of any two sides must be
    greater than length of third side

D-
Given sides as arguments, could provide a list of conditions
that can be checked to get correct triangle.

'''

class Triangle:
    def __init__(self, a, b, c):
        if a <= 0 or b <= 0 or c <= 0:
            raise ValueError("A triangle cannot have a side length of 0.")
        if a + b <= c or b + c <= a or a + c <= b:
            raise ValueError("Any 2 sides of a triangle must be "
                             "greater in length than the other.")
        
        self.sides = [a, b, c]
        self.kind = self.get_kind()

    def get_kind(self):
        a, b, c = self.sides
        if a == b == c:
            return "equilateral"
        if a == b or a == c or b == c:
            return "isosceles"
        if a != b != c != a:
            return "scalene"