class Fraction:
    def __init__(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator
    
    def __str__(self):
        self_reduced = self.get_fraction_reduced()

        # CAN GET REDUCED FRACTION @ IMPLEMENTATION
        if self_reduced:
            return f"{self_reduced.numerator}/{self_reduced.denominator}"

        return f"{self.numerator}/{self.denominator}"
    
    def __repr__(self):
        return f"Fraction({self.numerator}/{self.denominator})"
    
    def get_common_denominator(self, other):
        return self.denominator * other.denominator
    
    def get_fraction_reduced(self):
        for number in range(self.numerator, 0, -1):
            if (self.denominator % number == 0 and
                self.numerator % number == 0):
                return Fraction(self.numerator // number,
                                self.denominator // number)
    
    def __add__(self, other):
        denominator = self.get_common_denominator(other)
        numerator1 = self.numerator * other.denominator
        numerator2 = other.numerator * self.denominator
        return Fraction(numerator1 + numerator2, denominator)
    
    def __iadd__(self, other):
        self.numerator *= other.denominator
        other.numerator *= self.denominator
        self.numerator += other.numerator
        self.denominator *= other.denominator
        return self
    
    def __sub__(self, other):
        denominator = self.get_common_denominator(other)
        numerator1 = self.numerator * other.denominator
        numerator2 = other.numerator * self.denominator
        return Fraction(numerator1 - numerator2, denominator)
    
    def __isub__(self, other):
        self.numerator *= other.denominator
        other.numerator *= self.denominator
        self.numerator -= other.numerator
        self.denominator *= other.denominator
        return self
    
    def __mul__(self, other):
        return Fraction(self.numerator * other.numerator,
                        self.denominator * other.denominator)
    
    def __truediv__(self, other):
        return Fraction(self.numerator * other.denominator,
                        self.denominator * other.numerator)
    
    # W/ CROSS PRODUCT
    def __lt__(self, other):
        if not isinstance(other, Fraction):
            return NotImplemented
        #### TODO ####
    
    # W/ CROSS PRODUCT
    def __eq__(self, other):
        if not isinstance(other, Fraction):
            return NotImplemented

        '''
        if (self.numerator == other.numerator and
            self.denominator == other.denominator):
            return True
        '''
        
        self_reduced = self.get_fraction_reduced()
        other_reduced = other.get_fraction_reduced()

        if not other_reduced:
            return (self.numerator == other.numerator and
                    self.denominator == other.denominator)
        
        if other_reduced:
            return (self_reduced.numerator == other_reduced.numerator and
                    self_reduced.denominator == other_reduced.denominator)
    
    # W/ INVERSE CROSS PRODUCT
    def __ne__(self, other):
        if not isinstance(other, Fraction):
            return NotImplemented
        
        self_reduced = self.get_fraction_reduced()
        other_reduced = other.get_fraction_reduced()

        if other_reduced:
            if (self_reduced.numerator != other_reduced.numerator and
            self_reduced.denominator != other_reduced.denominator):
                return True
            if (self_reduced.numerator == other_reduced.numerator and
                self_reduced.denominator != other_reduced.denominator):
                return True
        
        if (self.numerator != other.numerator and
            self.denominator != other.denominator):
            return True
        if (self.numerator == other.numerator and
            self.denominator != other.denominator):
            return True


# Test cases:
f1 = Fraction(1, 2)
f2 = Fraction(1, 3)

print(f1 + f2)  # Should print "5/6"
print(f1 - f2)  # Should print "1/6"
print(f1 * f2)  # Should print "1/6"
print(f1 / f2)  # Should print "3/2"

print(f1)

print(f1 == Fraction(2, 4))  # Should print True (after reduction)
print(f1 < f2)  # Should print False

# print(str(f1))  # Should print "1/2"
# print(repr(f1))  # Should print "Fraction(1, 2)"

# # Test reduction
# f3 = Fraction(4, 8)
# print(f3)  # Should print "1/2" after reduction