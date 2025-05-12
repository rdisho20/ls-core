class Greeting:
    def greet(self, message):
        print(message)

class Hello(Greeting):
    @classmethod
    def hi(cls):
        greeting = Greeting() # construct an instance, because 'greet' isn't class method
        greeting.greet('Hi')

class Goodbye(Greeting):
    def bye(self):
        self.greet('Goodbye')

Hello.hi()