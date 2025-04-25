class Pet:
    # good approach, relevant info to print should be here
    def __init__(self, species, name):
        self._species = species
        self._name = name
        self.owner = None

    @property
    def species(self):
        return self._species
    
    @property
    def name(self):
        return self._name
    
    @property
    def owner(self):
        return self._owner
    
    @owner.setter
    def owner(self, owner):
        self._owner = owner


class Owner:
    # the owner has a number of pets, but more importantly
    # they have a list of their pets' names and other information
    def __init__(self, name):
        self._name = name
        self.pets = 0
    
    def number_of_pets(self):
        return self.pets
    
    @property
    def name(self):
        return self._name


class Shelter:
    # the shelter has records of who adopted who,
    # and maybe more inherently pythonic <- pov :: inheritance / collaboration
    # would receive that information form the owner b4 
    # entering / adding -> existing records
    def __init__(self):
        self.adoptions = {}

    def adopt(self, owner, pet):
        owner.pets += 1
        records = self.adoptions

        if not records.get(owner.name, None):
            records[owner.name] = [(pet.species, pet.name)]

        elif records[owner.name]:
            records[owner.name].append((pet.species, pet.name))

    def print_adoptions(self):
        for owner in self.adoptions.keys():
            print(f"{owner} has adopted the following pets:")

            for pet in self.adoptions[owner]:
                print(f"a {pet[0]} named {pet[1]}")

            print()

        
cocoa   = Pet('cat', 'Cocoa')
cheddar = Pet('cat', 'Cheddar')
darwin  = Pet('bearded dragon', 'Darwin')
kennedy = Pet('dog', 'Kennedy')
sweetie = Pet('parakeet', 'Sweetie Pie')
molly   = Pet('dog', 'Molly')
chester = Pet('fish', 'Chester')

asta = Pet('dog', 'Asta')
laddie = Pet('dog', 'Laddie')
fluffy = Pet('cat', 'Fluffy')
kat = Pet('cat', 'Kat')
ben = Pet('cat', 'Ben')
chatterbox = Pet('parakeet', 'Chatterbox')
bluebell = Pet('parakeet', 'Bluebell')

phanson = Owner('P Hanson')
bholmes = Owner('B Holmes')

shelter = Shelter()
shelter.adopt(phanson, cocoa)
shelter.adopt(phanson, cheddar)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)

shelter.print_adoptions()
print(f"{phanson.name} has {phanson.number_of_pets()} "
      "adopted pets.")
print(f"{bholmes.name} has {bholmes.number_of_pets()} "
      "adopted pets.")
print(f"The Animal shelter has {shelter.unadopted()} pets")
