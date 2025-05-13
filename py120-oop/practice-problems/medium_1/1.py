class BankAccount:
    def __init__(self, starting_balance):
        self._balance = starting_balance
    
    def balance_is_positive(self):
        return self.balance > 0
    
    @property
    def balance(self):
        return self._balance

'''
Alyssa is most correct, because she's using getter as a read only
for the internal instance variable self._balance.

If she were to access the variable using the '_', that's fine too, but then why
have a read me getter property for the variable?
defeats the point of the implementation and styling convention

'''