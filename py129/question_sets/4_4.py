class SecureSystem:
    def __init__(self, public_data, internal_data, private_data):
        self.public_data = public_data
        self._internal_data = self.get_internal_data(internal_data)
        self.__private_data = private_data
    
    def get_internal_data(self, internal_data):
        return (f"{internal_data} "
                f"**Accessing this data is not recommended**")
    
    def access_public(self):
        return self.public_data
    
    def access_private(self):
        return self.__private_data

class SubSystem(SecureSystem):
    def __init__(self, public_data, internal_data, private_data):
        super().__init__(public_data, internal_data, private_data)


system = SecureSystem("Public info", "For internal use", "Top secret")

# Test external access
print(system.public_data)       # Should work
print(system._internal_data)    # Should work, but show it's not recommended
print(system.__private_data)    # Should fail
print(system._SecureSystem__private_data)  # Should work but explain why

# Your solution should also demonstrate subclass access attempts
subsystem = SubSystem("Public info", "For internal use", "Top secret")

print(subsystem.access_public())       # Should work
print(subsystem._internal_data)    # Should work, but show it's not recommended
print(subsystem.access_private())    # Should fail
print(subsystem._SecureSystem__private_data)  # Should work but explain why


'''
system._SecureSystem__private_data

This works the way it does, because by using name mangling when
accessing the instance variable __private_data, we actually 
can view the value, as opposed to accessing it by typing 
system.__private_data (which returns None).  This is the point
of using the '__' to let Python know we can only access
this value by using name mangling
'''