class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector2D({self.x, self.y})"

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
    
    def __eq__(self, other):
        return (self.x, self.y) == (other.x, other.y)

# Test cases
v1 = Vector2D(3, 4)
v2 = Vector2D(1, 2)
print(v1)  # Should display something like "Vector2D(3, 4)"
print(v1 + v2)  # Should display the result of vector addition
print(v1 - v2)  # Should display the result of vector subtraction
print(v1 == Vector2D(3, 4))  # Should return True
print(v1 == v2)  # Should return False