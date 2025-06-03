
class A:
    def some_method(self):
        return "Method from A"

class B(A):
    def some_method(self):
        result = super().some_method()
        return f"Method from B, calling {result}"

class C(A):
    def some_method(self):
        result = super().some_method()
        return f"Method from C, calling {result}"

class D(B, C):
    pass

obj = D()
print(obj.some_method())