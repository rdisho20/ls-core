class Cat:
    @classmethod
    def generic_greeting(cls):
        print("Hello! I'm a cat!")

kitty = Cat()
kitty.generic_greeting()      # Hello! I'm a cat!
type(kitty).generic_greeting()
kitty.__class__.generic_greeting()
