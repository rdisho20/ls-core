class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius
    
    def __str__(self):
        return f"{self.celsius}°C"
    
    # to check if sorting is correct
    def __repr__(self):
        return f"{self.celsius}°C"
    
    # We want 'NotImplemented' incase handling a float value for our 'other'
    def __eq__(self, other):
        if not isinstance(other, Temperature):
            return NotImplemented
        return self.celsius == other.celsius

    def __ne__(self, other):
        if not isinstance(other, Temperature):
            return NotImplemented
        return self.celsius != other.celsius

    def __lt__(self, other):
        if not isinstance(other, Temperature):
            return NotImplemented
        return self.celsius < other.celsius

    def __gt__(self, other):
        if not isinstance(other, Temperature):
            return NotImplemented
        return self.celsius > other.celsius

    def __le__(self, other):
        if not isinstance(other, Temperature):
            return NotImplemented
        return self.celsius <= other.celsius

    def __ge__(self, other):
        if not isinstance(other, Temperature):
            return NotImplemented
        return self.celsius >= other.celsius




# Test cases
temps = [
    Temperature(25),
    Temperature(18),
    Temperature(30),
    Temperature(20),
    Temperature(25)
]

print(sorted(temps))  # Should sort temperatures from coldest to warmest
print(Temperature(25) == Temperature(25))  # Should be True
print(Temperature(25) != Temperature(20))  # Should be True
print(Temperature(25) > Temperature(20))   # Should be True
print(Temperature(25) < Temperature(30))   # Should be True