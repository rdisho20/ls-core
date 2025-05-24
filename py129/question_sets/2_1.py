class BankAccount:
    def __init__(self, account_number, name, balance):
        self.__account_number = account_number
        self.__name = name
        self.__balance = balance
    
    def get_balance(self):
        return self._BankAccount__balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be a positive amount")
        self._BankAccount__balance += amount

    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("You do not have that much money to withdraw")
        self._BankAccount__balance -= amount
        

# Test cases
account = BankAccount("12345", "John Doe", 1000)
print(account.get_balance())  # Should output 1000
account.deposit(500)
print(account.get_balance())  # Should output 1500
account.withdraw(200)
print(account.get_balance())  # Should output 1300
#account.withdraw(2000)  # Should print an error message
print(dir(account))  # __balance should not be directly accessible