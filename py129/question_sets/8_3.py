class SwimmingMixin:
    pass

class FlyingMixin:
    pass

class CharacterType:
    def __init__(self):
        self.abilities = []

    def add_ability(self, ability):
        pass

class Hero(CharacterType):
    pass

class Monster(CharacterType):
    pass

class NPC(CharacterType):
    pass




# Create characters with different abilities
swimming_hero = Hero("Aquaman")
swimming_hero.add_ability(SwimmingMixin())

flying_monster = Monster("Dragon")
flying_monster.add_ability(FlyingMixin())

swimming_flying_npc = NPC("Fairy")
swimming_flying_npc.add_ability(SwimmingMixin())
swimming_flying_npc.add_ability(FlyingMixin())

# Test polymorphic behavior
characters = [swimming_hero, flying_monster, swimming_flying_npc]

# All characters with swimming ability should swim
for character in characters:
    if character.can_swim():
        character.swim()

# All characters with flying ability should fly
for character in characters:
    if character.can_fly():
        character.fly()