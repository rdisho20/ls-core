class Cat:

    count = 0

    def __init__(self):
        Cat.count += 1
    
    @classmethod
    def total(cls):
        print(Cat.count)
    
    def get_total(self):
        print(f'{id(self)} is part of class {self.__class__.__name__} count up to {Cat.count}')

Cat.total()

kitty1 = Cat()
Cat.total()

kitty2 = Cat()
Cat.total()

print(Cat())
Cat.total()

kitty2.get_total()