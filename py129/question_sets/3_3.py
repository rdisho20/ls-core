class Animal:
    def describe(self):
        print("Info about the class Animal")

class Mammal(Animal):
    def describe(self):
        print("Info about Mammal")

    def feed_young(self):
        print("Feeding the young!!!!")

class WingedCreature(Animal):
    def describe(self):
        print("Info about WingedCreature")

    def fly(self):
        print("Flying!!!!")

class Bat(WingedCreature, Mammal):
    def __init__(self):
        super().__init__()


# Test cases:
bat = Bat()
print(bat.describe())  # Should show information from all classes in the proper order
print(Bat.__mro__)     # Print the MRO to verify understanding

# Try calling a method from each parent class
bat.fly()  # From WingedCreature
bat.feed_young()  # From Mammal