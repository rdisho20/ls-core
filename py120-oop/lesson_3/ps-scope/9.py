class Bird:
    def __init__(self, species):
        self.species = species

class Sparrow(Bird):
    def __init__(self, species, color):
        super().__init__(species)
        self.color = color

bird1 = Sparrow('sparrow', 'brown')
print(bird1.species)
print(bird1.color)