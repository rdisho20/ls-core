class WalkMixin:
    def walk(self):
        return f"{self.name} {self.gait()} forward"

class Person(WalkMixin):
    def __init__(self, name):
        self.name = name
    
    def gait(self):
        return "strolls"

class Noble(Person):
    def __init__(self, name, title):
        super().__init__(name)
        self.title = title

    def gait(self):
        return "struts"
    
    def __str__(self):
        return f"{self.title} {self.name}"

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

byron = Noble("Byron", "Lord")
print(byron.walk())  # "Lord Byron struts forward"
print(byron.name)    # "Byron"
print(byron.title)   # "Lord"