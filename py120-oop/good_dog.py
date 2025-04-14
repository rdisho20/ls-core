class GoodDog:
    
    def __init__(self, name):
        # self.name = instance variable (state)
        self.name = name
        print(f'Constructor for {self.name}')

    # speak is instance method (behavior -verb)
    def speak(self):
        # using self.name instance variable
        print(f'{self.name} says Woof!')

    # roll_over is instance method (behavior -verb)
    def roll_over(self):
        # using self.name instance variable
        print(f'{self.name} is rolling over.')

sparky = GoodDog('Sparky') # Constructor for Sparky
sparky.speak() # Sparky says Woof!
sparky.roll_over() # Sparky is rolling over.

rover = GoodDog('Rover')
rover.speak()
rover.roll_over()