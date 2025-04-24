class WalkingMixin:
    def walk(self):
        print("Let's go for a walk!")

class Cat(WalkingMixin):
    def __init__(self, name):
        self._name = name
    
    @property
    def name(self):
        return self._name
    
    def greet(self):
        print(f'Hello! My name is {self.name}')

kitty = Cat('Sophie')
kitty.greet()
kitty.walk()