# only write one new method!
class WalkMixin:
    def walk(self):
        return f"{self.name} {self.gait()} forward"

class Person(WalkMixin):
    def __init__(self, name):
        self.name = name
    
    def gait(self):
        return "strolls"

class Cat(WalkMixin):
    def __init__(self, name):
        self.name = name
    
    def gait(self):
        return "saunters"

class Cheetah(WalkMixin):
    def __init__(self, name):
        self.name = name
    
    def gait(self):
        return "runs"

mike = Person("Mike")
print(mike.walk())

kitty = Cat("Kitty")
print(kitty.walk())

flash = Cheetah("Flash")
print(flash.walk())