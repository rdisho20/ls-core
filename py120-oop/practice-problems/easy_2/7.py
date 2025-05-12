class Television:
    @classmethod
    def manufacturer(cls):
        return "Amazon"

    def model(self):
        return "Omni Fire"

tv = Television()
print(tv.manufacturer()) # prints Amazon (because can use class instance to call class methods though should be shunned)
print(tv.model()) # prints Omni Fire

print(Television.manufacturer()) # prints Amazon
print(Television.model()) # TypeError, because no self, just calling on the class, not class instance
