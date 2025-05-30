class BankAccount:
    def __init__(self, owner_name, balance):
        self.owner_name = owner_name
        self.__balance = self.set_balance(balance)
    
    @property
    def balance(self):
        return self.__balance
    
    @balance.setter
    def balance(self, balance):
        raise PermissionError("You do not have sufficient permissions "
                              "to perform this operation dawg")
    
    def set_balance(self, balance):
        if not isinstance(balance, int):
            return NotImplemented
        return balance

    def deposit(self, amount):
        if amount < 0:
            raise ValueError("You cannot deposit a negative amount")
        self.__balance += amount
    
    def withdraw(self, amount):
        if amount <= self.balance:
            self.__balance -= amount
            return amount
        else:
            raise InsufficientFundsError

class InsufficientFundsError(BaseException):
    def __init__(self, message="You don't have that kind of money bro!"):
        self.message = message
    
    def __str__(self):
        return f"{self.message}"

account = BankAccount("Ryan", 50_000)

try:
    account.balance = 10_000_000
except PermissionError as e:
    print(e)

print(account.balance)

account.deposit(150)
print(account.balance)

'''
account.withdraw(100_000)
account.balance = 1_000_000_000
print(account.balance)
'''

account.withdraw(10_000)
print(account.balance)

account.__balance = 1_000_000_000_000
print(account.__balance)
print("I have gamed the system!! MUAHAHAHAHA")
print(account._BankAccount__balance)