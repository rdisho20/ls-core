class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __mul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        return Vector(self.x * other, self.y * other)

    def __rmul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        return Vector(self.x * other, self.y * other)


v = Vector(3, 4)
print(v * 2)        # Should output: Vector(6, 8)
print(3 * v)        # Should output: Vector(9, 12)
print(v * 0.5)      # Should raise TypeError