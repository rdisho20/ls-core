import unittest
from calculator import Calculator

class CalculatorTest(unittest.TestCase):
    def setUp(self):
        self.calc = Calculator()

    def test_addition(self):
        result = self.calc.add(2, 3)
        self.assertEqual(5, result)
    
    def test_subtraction(self):
        result = self.calc.subtract(5, 2)
        self.assertEqual(3, result)
    
    def test_multiplication(self):
        result = self.calc.multiply(4, 3)
        self.assertEqual(12, result)

if __name__ == '__main__':
    unittest.main()