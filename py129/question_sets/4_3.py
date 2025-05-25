class ShoppingItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def __str__(self):
        return f"{self.name}: ${self.price}"
    
    def __add__(self, other):
        return ShoppingItem(self.name + ", " + other.name,
                            self.price + other.price)

    def __lt__(self, other):
        return self.price < other.price

    def __gt__(self, other):
        return self.price > other.price

book = ShoppingItem("Book", 15.99)
pen = ShoppingItem("Pen", 3.99)

combined = book + pen
print(combined.name)      # Should print: "Book, Pen"
print(combined.price)     # Should print: 19.98

print(book > pen)         # Should print: True
print(book < pen)         # Should print: False

print(book)               # Should print: "Book: $15.99"