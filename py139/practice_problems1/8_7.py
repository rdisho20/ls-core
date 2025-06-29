def test_divide_by_zero(self):
    with self.assertRaises(ZeroDivisionError):
        self.calculator.divide(10, 0)