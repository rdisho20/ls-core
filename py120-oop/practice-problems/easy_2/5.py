class Greeting:
    def greet(self, message):
        print(message)

class Hello(Greeting):
    def hi(self):
        self.greet('Hello')
    
    @classmethod
    def hi(cls):
        greeting = Greeting()
        greeting.greet("Hi")

class Goodbye(Greeting):
    def bye(self):
        self.greet('Goodbye')


Hello.hi()