class Temperature:
    def __init__(self, celcius):
        self.celcius = celcius
    
    @property
    def celcius(self):
        return self._celcius
    
    @celcius.setter
    def celcius(self, celcius):
        if celcius < -273.15:
            raise ValueError("Please enter in a number greater than "
                             "absolute zero")
        self._celcius = celcius
    
    @property
    def fahrenheit(self):
        return (self.celcius * (9 / 5)) + 32

    @fahrenheit.setter
    def fahrenheit(self, fahrenheit):
        celcius_value = (fahrenheit - 32) * (5 / 9)
        if celcius_value < -273.15:
            raise ValueError("Celcius value can't be less than absolute zero")
        self._celcius = celcius_value
    

# Test cases
temp = Temperature(25)  # Create with 25°C
print(temp.celcius)  # Should output 25
print(temp.fahrenheit)  # Should output 77 (converted from 25°C)
temp.fahrenheit = 68
print(temp.celcius)  # Should output 20 (converted from 68°F)
try:
    temp.celcius = -300  # Below absolute zero
    print("Test failed: Should have raised an exception")
except ValueError as e:
   print(f"Test passed: {e}")