class GameCharacter:
    def __init__(self, strength, intelligence, agility):
        self.strength = strength
        self.intelligence = intelligence
        self.agility = agility
    
    def __eq__(self, other):
        if not isinstance(other, GameCharacter):
            raise TypeError("Input is not of the appropriate type")

        return (self.strength == other.strength and
                self.intelligence == other.intelligence and
                self.agility == other.agility)

    def __lt__(self, other):
        if not isinstance(other, GameCharacter):
            raise TypeError("Input is not of the appropriate type")

        self_sum = self.strength + self.intelligence + self.agility
        other_sum = self.strength + self.intelligence + self.agility

        return self_sum < other_sum

    def __add__(self, other):
        if not isinstance(other, GameCharacter):
            raise TypeError("Input is not of the appropriate type")
        
        strength_sum = self.strength + other.strength
        intelligence_sum = self.intelligence + other.intelligence
        agility_sum = self.agility + other.agility
        
        return GameCharacter(strength_sum, intelligence_sum, agility_sum)

    def __str__(self):
        return (f"Character Type: {self.__class__.__name__}\n"
                f"Strength:       level {self.strength}\n"
                f"Intelligence:   level {self.intelligence}\n"
                f"Agility:        level {self.agility}\n")

    def __repr__(self):
        return (f"{self.__class__.__name__}"
                f"({self.strength}, {self.intelligence}, {self.agility})")
    
    def special_move(self):
        print("Do the SUPER move!!")

class Warrior(GameCharacter):
    def __init__(self, strength, intelligence, agility):
        super().__init__(strength, intelligence, agility)
    
    def special_move(self):
        return self.slash()
    
    def slash(self):
        print("SLASH!!")


class Mage(GameCharacter):
    def __init__(self, strength, intelligence, agility):
        super().__init__(strength, intelligence, agility)
    
    def special_move(self):
        return self.force_push()
    
    def force_push(self):
        print("FORCE PUSH!!")

warrior = Warrior(14, 5, 10)
mage = Mage(3, 16, 11)

super_character = warrior + mage

print(warrior)
print(mage)
print(super_character)

print(warrior < mage)
print(warrior > mage)

print(super_character == mage)
print(mage == warrior)

mage.special_move()
warrior.special_move()
super_character.special_move()