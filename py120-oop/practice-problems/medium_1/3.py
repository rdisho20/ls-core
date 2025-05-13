class Animal:
    def speak(self, string):
        print(string)

class Cat(Animal):
    def meow(self):
        self.speak('Cat says:')
        print('Meow!')

class Dog(Animal):
    def bark(self):
        self.speak('Dog says:')
        print('Woof! Woof! Woof!')

fido = Dog()
fido.bark()

lilly = Cat()
lilly.meow()