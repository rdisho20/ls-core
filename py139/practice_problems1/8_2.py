import unittest
from rectangle import Rectangle

class RectangleTest(unittest.TestCase):
    def setUp(self):
        self.rectangle = Rectangle(5, 10)
    
    def test_inital_values(self):
        self.assertEqual(self.rectangle.width, 5)
        self.assertEqual(self.rectangle.height, 10)

if __name__ == "__main__":
    unittest.main()