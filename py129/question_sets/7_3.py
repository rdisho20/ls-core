class Wedding:
    def __init__(self):
        self.guests = ["Alice", "Bob", "Charlie"]
        self.flowers = ["Roses", "Lilies"]
        self.songs = ["First Dance", "Party Rock"]
    
    def prepare(self, preparers):
        for preparer in preparers:
            preparer.job(self)

class Chef:
    def prepare_food(self, wedding):
        print(f"Preparing food for {len(wedding.guests)} guests")

    def job(self, wedding):
        self.prepare_food(wedding)

class Decorator:
    def decorate_place(self, wedding):
        print(f"Decorating place with {', '.join(wedding.flowers)}")
    
    def job(self, wedding):
        self.decorate_place(wedding)

class Musician:
    def prepare_performance(self, wedding):
        print(f"Preparing performance with songs: {', '.join(wedding.songs)}")
    
    def job(self, wedding):
        self.prepare_performance(wedding)

class Photographer:
    def take_photos(self, wedding):
        print("Take photos of the wedding venue")
    
    def job(self, wedding):
        self.take_photos(wedding)



wedding = Wedding()
preparers = [Chef(), Decorator(), Musician(), Photographer()]
wedding.prepare(preparers)
# Should output:
# Preparing food for 3 guests
# Decorating place with Roses, Lilies
# Preparing performance with songs: First Dance, Party Rock
# Taking photos of the wedding venue