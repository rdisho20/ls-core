class Money:

    def __init__(self, dollars, cents):
        self.dollars = dollars
        self.cents = cents
        
    def __str__(self):
        return f"${self.dollars}.{self.cents:02d}"
    
    def __add__(self, other):
        dollars = self.dollars + other.dollars
        cents = self.cents + other.cents

        if cents >= 100:
            return Money(dollars + 1, cents - 100)
        
        return Money(dollars, cents)

    def __iadd__(self, other):
        self.dollars += other.dollars
        self.cents += other.cents

        if self.cents >= 100:
            self.dollars += 1
            self.cents -= 100

        return self

    def __sub__(self, other):
        if other.cents > self.cents:
            if other.dollars > self.dollars:
                dollars = (self.dollars + 10) - other.dollars
            else:
                dollars = (self.dollars - 1) - other.dollars
            cents = (100 + self.cents) - other.cents

        elif other.dollars > self.dollars:
            dollars = (self.dollars + 10) - other.dollars

        else:
            dollars = self.dollars - other.dollars
            cents = self.cents - other.cents

        return Money(dollars, cents)

    def __isub__(self, other):
        if other.cents > self.cents:
            if other.dollars > self.dollars:
                self.dollars += 10
                self.dollars -= other.dollars
            else:
                self.dollars -= 1 
                self.dollars -= other.dollars

            self.cents += 100 
            self.cents -= other.cents

        elif other.dollars > self.dollars:
            self.dollars += 10
            self.dollars -= other.dollars

        else:
            self.dollars -= other.dollars
            self.cents -= other.cents
        
        return self


m1 = Money(5, 75)
m2 = Money(3, 50)
print(m1 + m2)       # Should output: $9.25
print(m1 - m2)       # Should output: $2.25
m1 += Money(1, 50)
print(m1)            # Should output: $7.25
m1 -= Money(0, 50)
print(m1)            # Should output: $6.75