class BankAccount:
    def __init__(self, owner_name, initial_balance):
        self.owner_name = owner_name
        self.balance = initial_balance
    
    @property
    def owner_name(self):
        try:
            return self._owner_name
        except (TypeError, ValueError) as e:
            print(e)
    
    @owner_name.setter
    def owner_name(self, owner_name):
        if not isinstance(owner_name, str):
            raise TypeError("TypeError DAWG")
        if not owner_name:
            raise ValueError("ValueError DAWG")
        
        self._owner_name = owner_name
    
    @property
    def balance(self):
        try:
            return self._balance
        except ValueError as e:
            print(e)
    
    @balance.setter
    def balance(self, balance):
        if balance < 0:
            raise ValueError("balance below 0 dawg")
            
        self._balance = balance


account = BankAccount("Alice", 1000)
print(account.balance)        # Should print: 1000
account.balance = 2000        # Should work
print(account.balance)        # Should print: 2000
account.balance = -500        # Should raise ValueError
account.owner_name = "Bob"    # Should work
account.owner_name = ""       # Should raise ValueError
account.owner_name = 123      # Should raise TypeError