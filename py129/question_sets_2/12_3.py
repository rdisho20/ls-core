class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector2D({self.x}, {self.y})"
    
    def __add__(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        
        return Vector2D(self.x + other.x, self.y + other.y)
    
    def __iadd__(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        
        self.x += other.x
        self.y += other.y

        return self
    
    def __sub__(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        
        return Vector2D(self.x - other.x, self.y - other.y)
    
    def __isub__(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        
        self.x -= other.x
        self.y -= other.y

        return self
    
    def __mul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        
        return Vector2D(self.x * other, self.y * other)
    
    def __imul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        
        self.x *= other
        self.y *= other

        return self
    
    def __rmul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        
        return Vector2D(self.x * other, self.y * other)
    
    def __truediv__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        
        return Vector2D(self.x / other, self.y / other)



v1 = Vector2D(3, 4)
v2 = Vector2D(1, 2)
print(v1 + v2)      # Should output: Vector2D(4, 6)
print(v1 - v2)      # Should output: Vector2D(2, 2)
print(v1 * 3)       # Should output: Vector2D(9, 12)
print(2 * v1)       # Should output: Vector2D(6, 8)
print(v1 / 2)       # Should output: Vector2D(1.5, 2.0)
v1 += v2
print(v1)           # Should output: Vector2D(4, 6)