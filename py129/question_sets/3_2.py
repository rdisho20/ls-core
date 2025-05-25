class Temperature:

    def __init__(self, celsius):
        if celsius < -273.15:
            raise ValueError("Temperature not possible")

        self._celsius = celsius
    
    @classmethod
    def from_fahrenheit(cls, fahrenheit):
        celsius = (fahrenheit - 32) / (9 / 5)
        return cls(celsius)
    
    @staticmethod
    def is_valid_temperature(temperature):
        if temperature < -273.15:
            return False
        return True
    
    def to_fahrenheit(self):
        return (self._celsius * (9 / 5)) + 32

    def display_temperature(self):
        print(self._celsius)

    def get_celsius(self):
        return self._celsius


# Test cases:
temp1 = Temperature(25)  # 25°C
temp2 = Temperature.from_fahrenheit(77)  # 25°C

print(temp1.to_fahrenheit())  # Should print 77.0
print(temp2.get_celsius())    # Should print 25.0

print(Temperature.is_valid_temperature(25))     # Should print True
print(Temperature.is_valid_temperature(-300))   # Should print False

# Attempting to create an invalid temperature
try:
    temp3 = Temperature(-300)
except ValueError as e:
    print(str(e))  # Should print an error about invalid temperature