class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "(generic animal sound)"

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name)
    def speak(self):
        return "Meow!"

class Bird(Animal):
    def __init__(self, name):
        super().__init__(name)
    def speak(self):
        return "Tweet!"

class Lizard(Animal):
    def __init__(self, name):
        super().__init__(name)

def animal_sounds(animals):
    for animal in animals:
        print(f"{animal.name} says: {animal.speak()}")

animals = [Dog("Buddy"), Cat("Whiskers"), Bird("Tweety"), Lizard("Rex")]
animal_sounds(animals)

# Should output:
# Buddy says: Woof!
# Whiskers says: Meow!
# Tweety says: Tweet!
# Rex says: (generic animal sound)