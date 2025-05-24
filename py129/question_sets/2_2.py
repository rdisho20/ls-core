'''
`print(instance.greet())` on line 17 outputs "Hello from ClassB"

This is because since `instance = ClassD()` where ClassD inherits from 
ClassB then ClassC in that order (left to right), the first `greet()`
method we find resides in ClassB.  This is because our method resolution order
for `greet()` called from instance of ClassD is as follows
- ClassB, ClassA, ClassC, ClassA

That being said, the output of line 18 `print(ClassD.__mro__)`
will be also in same order as above...
- ClassB, ClassA, ClassC, ClassA
'''


class ClassA:
    def greet(self):
        return "Hello from ClassA"

class ClassB(ClassA):
    def greet(self):
        return "Hello from ClassB"

class ClassC(ClassA):
    def greet(self):
        return "Hello from ClassC"

class ClassD(ClassC): # removed inheritance of classB so that greet() executes from ClassC
    pass

instance = ClassD()
print(instance.greet())
print(ClassD.__mro__)