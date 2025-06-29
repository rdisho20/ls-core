import unittest
from bankaccount import BankAccount

class BankAccountTest(unittest.TestCase):
    def setUp(self):
        self.bankaccount = BankAccount()
    
    def test_initial_balance(self):
        self.assertEqual(self.bankaccount.balance, 0)
    
    def test_deposit_amount(self):
        self.bankaccount.deposit(500)
        self.assertEqual(self.bankaccount.balance, 500)
    
    def test_withdraw_amount(self):
        self.bankaccount.balance = 1000
        self.bankaccount.withdraw(250)
        self.assertEqual(self.bankaccount.balance, 750)
    
    def test_insufficient_funds(self):
        self.assertRaises(ValueError, self.bankaccount.withdraw(500),
                          "Insufficient funds")