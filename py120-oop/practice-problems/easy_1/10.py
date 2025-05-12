class Cat:
    _cats_count = 0

    def __init__(self, type):
        self.type = type
        self.__class__._cats_count += 1
    
    @classmethod
    def cats_count(cls):
        return cls._cats_count

kitty = Cat('tabby')
marty = Cat('shorthair')
donnie = Cat('russian blue')

print(Cat.cats_count())