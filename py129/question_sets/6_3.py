import math

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        if not isinstance(other, Vector):
            raise TypeError("Not a vector")
        
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        if not isinstance(other, Vector):
            raise TypeError("Not a vector")
        
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        return Vector(self.x * other, self.y * other)
    
    def __rmul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        return Vector(other * self.x, other * self.y)
    
    def __truediv__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        return Vector(self.x / other, self.y / other)
    
    def __abs__(self):
        return math.sqrt(self.x**2 + self.y**2)
    
    def __neg__(self):
        return Vector(-self.x, -self.y)


# Test Cases
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(v1 + v2)      # Should output: Vector(4, 6)
print(v1 - v2)      # Should output: Vector(2, 2)
print(v1 * 2)       # Should output: Vector(6, 8)
print(2 * v1)       # Should output: Vector(6, 8)
print(v1 / 2)       # Should output: Vector(1.5, 2.0)
print(abs(v1))      # Should output: 5.0 (magnitude of vector)
print(-v1)          # Should output: Vector(-3, -4)