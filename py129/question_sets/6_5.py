
class InvalidItemError(Exception):
    def __init__(self, msg="Invalid data"):
        self.msg = msg

class InventoryLimitError(Exception):
    def __init__(self, msg="Inventory limit reached"):
        self.msg = msg

class InventoryItem:
    def __init__(self, name, price, quantity):
        if price < 0:
            raise InvalidItemError("Price cannot be negative")
        if quantity < 0:
            raise InvalidItemError("Quantity cannot be negative")
            
        self.name = name
        self.price = price
        self.quantity = quantity
        
    def __str__(self):
        return f"{self.name}: ${self.price} ({self.quantity} in stock)"

class Inventory:
    def __init__(self, capacity=10):
        self.items = []
        self.capacity = capacity
        
    def add_item(self, item):
        if not isinstance(item, InventoryItem):
            raise TypeError("Cannot add this object type to Inventory")
        if len(self.items) + 1 > self.capacity:
            raise InventoryLimitError("Cannot add item to inventory")
        self.items.append(item)
        
    def total_value(self):
        total = 0
        for item in self.items:
            total += item.price * item.quantity
        return total

    def __iter__(self):
        return iter(self.items)
        
    def __getitem__(self, index):
        return self.items[index]
        
    def __len__(self):
        return len(self.items)

# Test code
inventory = Inventory(3)

try:
    inventory.add_item(InventoryItem("Laptop", 1000, 3))
    inventory.add_item(InventoryItem("Mouse", 25, 10))
    inventory.add_item(InventoryItem("Keyboard", 45, 5))
    print("Total value: " + "$" + str(inventory.total_value()))  # Should be 3000 + 250 + 225 = 3475
    
    # This should raise InventoryLimitError
    inventory.add_item(InventoryItem("Monitor", 200, 15))
    
except InvalidItemError as e:
    print(f"Invalid item: {e}")
except InventoryLimitError as e:
    print(f"Inventory limit reached: {e}")

# Test collection behaviors
print(len(inventory))  # Should be 3
print(inventory[0])    # Should print the first item
for item in inventory:
    print(item)        # Should iterate through all items