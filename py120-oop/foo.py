# Given an instance of a Foo object, show two ways to print
# I am a Foo object without hardcoding the word Foo

class Foo:
    def __init__(self, name):
        self.name = name
        type_name = type(self).__name__
        print(f'I am a {type_name} object.')

obj = Foo('New Object')
print(obj)