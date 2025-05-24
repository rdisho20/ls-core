import random

class BankAccount:
    def __init__(self, balance):
        self._balance = balance
        self._account_number = random.randint(0, 99999999)
    
    def deposit(self, amount):
        self._balance += amount
        return self.balance

    def withdraw(self, amount):
        self._balance -= amount
        return self.balance

    @property
    def account_number(self):
        return self._account_number
    
    @property
    def balance(self):
        return self._balance

account = BankAccount(1000)
print(account.balance)         # Should display 1000
print(account.account_number)  # Should display an 8-digit number

account.deposit(500)
print(account.balance)         # Should display 1500

account.withdraw(200)
print(account.balance)         # Should display 1300

# These should not work:
account.balance = 5000       # Should raise AttributeError
account.account_number = 12345678  # Should raise AttributeError