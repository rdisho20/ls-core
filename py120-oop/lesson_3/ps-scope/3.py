class Cat:
    def get_name(self):
        if not hasattr(self, 'name'):
            raise AttributeError("Name not set!")

        return self.name

marty = Cat()
print(marty.get_name())