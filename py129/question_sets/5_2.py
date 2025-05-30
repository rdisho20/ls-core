class A:
    x = 1
    
    def show(self):
        print(f"A: {self.x}")

class B(A):
    x = 2
    
    def show(self):
        print(f"B: {self.x}")

class C(A):
    def show(self):
        super().show()
        print(f"C: {self.x}")

class D(B, C):
    pass


d = D()
print(d.x) # We get 'x' from class B which is 2
d.show()
print(D.__mro__)

'''
`print(d.x)` gives us the value of class variable 'x' from class B which is 2
This is because first we check class B because of MRO, and see there is
a class variable named 'x'.

`d.show()` prints "B: 2"
This is because we inherit from class B first so we check the instance method
`show` there and find one, printing our output.  `self.x` in this context
is going to refer to our class variable 'x' in class B because
we are using class instance d as the calling object, and since
it inherits from class B first, we get the class variable 'x' with a value of 2

`print(D.__mro__)` outputs class method resolution order in the following order
Class D, Class B, Class C, Class A

This is because, first we check class D, then class B, counterintuitively we check
class C next because of how we define class D inheritance list, then finally we check
class A
'''