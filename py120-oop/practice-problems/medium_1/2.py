class InvoiceEntry:
    def __init__(self, product_name, number_purchased):
        self._product_name = product_name
        self._quantity = number_purchased
    
    @property
    def quantity(self):
        return self._quantity
    
    @quantity.setter
    def quantity(self, quantity):
        self._quantity = quantity

entry = InvoiceEntry('Marbles', 5000)
print(entry.quantity)

entry.quantity = 10_000
print(entry.quantity)
