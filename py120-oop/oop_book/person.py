class Person:

    class _Name:

        def __init__(self, name):
            self.name = name

        # assume to never be compared to non-_Name objects
        # because name is meant for internal use within Person class
        def __eq__(self, other):
            return self.name == other.name
        
        def __ne__(self, other):
            return self.name != other.name
        
    def __init__(self, name1, name2):
        print(self._Name(name1) == self._Name(name2))

Person('John', 'John')
Person('Alice', 'Allison')