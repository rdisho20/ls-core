class GameCharacter:
    def __init__(self, name):
        self.name = name
    
    def use_ability(self):
        return f"{self.name} has no special ability."

class Warrior(GameCharacter):
    def __init__(self, name):
        super().__init__(name)
    
    def use_ability(self):
        return f"{self.name} swings a mighty sword!"

class Mage(GameCharacter):
    def __init__(self, name):
        super().__init__(name)

    def use_ability(self):
        return f"{self.name} casts a powerful spell!"

class Archer(GameCharacter):
    def __init__(self, name):
        super().__init__(name)
    
    def use_ability(self):
        return f"{self.name} shoots an arrow with precision!"

class GameController:
    def execute_abilities(self, characters):
        for character in characters:
            print(character.use_ability())

controller = GameController()
characters = [Warrior("Conan"), Mage("Gandalf"), Archer("Legolas")]
controller.execute_abilities(characters)