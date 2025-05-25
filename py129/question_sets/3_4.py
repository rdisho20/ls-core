class BankAccount:
    def __init__(self, owner, balance):
        self.__owner = owner
        self.__balance = balance
        self.__transaction_count = 0
    
    def deposit(self, amount):
        if amount < 0:
            raise ValueError("Amount must be a positive number")
        self.__balance += amount
        self.__transaction_count += 1

    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient Funds")
        self.__balance -= amount
        self.__transaction_count += 1
    
    @property
    def owner(self):
        return self.__owner
    
    @property
    def balance(self):
        return self.__balance


# Test cases:
account = BankAccount("John Doe", 1000)
print(account.owner)  # Should print "John Doe"
print(account.balance)  # Should print 1000

account.deposit(500)
print(account.balance)  # Should print 1500

account.withdraw(200)
print(account.balance)  # Should print 1300

# Try to withdraw more than the balance
try:
    account.withdraw(2000)
except ValueError as e:
    print(str(e))  # Should print an error about insufficient funds

# Try to access the mangled attribute
try:
    print(account.__transaction_count)  # This should fail
except AttributeError:
    print("Cannot access private attribute directly")

# But we can access it through the name mangling
print(account._BankAccount__transaction_count)  # Should print the number of transactions