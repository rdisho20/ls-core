'''
A-
Given an 'input_number'
for each roman numeral value largest to smallest
    if the key for that roman numeral is less than 'input_number'
        divide 'input_number' by 'key' to get amount of times that roman_numeral fits
        multiply quotient by roman_numeral value concatted to 'result'

'''

class RomanNumeral:
    num_map = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    def __init__(self, num):
        self.num = num
        self.length = len(str(num))

    def to_roman(self):
        num_map = sorted(list(RomanNumeral.num_map.items()),
                         key=self.sort_w_key, reverse=True)
        result = ''
        
        remainder = self.num
        for item in num_map:
            key = item[0]
            numeral = item[1]

            if key <= self.num:
                quotient, remainder = divmod(remainder, key)
                result += f"{numeral * quotient}"
        
        return result

    def sort_w_key(self, item):
        return item[0]

convert1 = RomanNumeral(650)
print(convert1.to_roman()) # DCL

convert1 = RomanNumeral(1)
print(convert1.to_roman())

convert1 = RomanNumeral(2)
print(convert1.to_roman())

convert1 = RomanNumeral(3)
print(convert1.to_roman())

convert1 = RomanNumeral(4)
print(convert1.to_roman())

convert1 = RomanNumeral(5)
print(convert1.to_roman())

convert1 = RomanNumeral(6)
print(convert1.to_roman())

convert1 = RomanNumeral(9)
print(convert1.to_roman())

convert1 = RomanNumeral(27)
print(convert1.to_roman())

convert1 = RomanNumeral(48)
print(convert1.to_roman())