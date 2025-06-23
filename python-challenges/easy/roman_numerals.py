'''
P-
input: integer
output: string; int converted -> roman numeral

E-rules:
a value of zero does not have a roman numeral

I-rules:
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1

D- dictionary to store conversions

A-
Given a number find it's closest value among the keys of 'roman_numeral_dictionary'

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
        map = RomanNumeral.num_map
        roman_numeral = ''
        num = self.num

        while num > 0:
            for idx, key in enumerate(map):
                if num <= key:
                    key = self.update_key(idx, key, num, map)
                    factor = self.get_factor(key, num)
                    roman_numeral += f"{map[key] * (factor)}"
                    break
            
            try:
                num = int(''.join(list(str(num)[1:])))
            except ValueError:
                num = 0
        
        return roman_numeral
    
    def update_key(self, idx, key, num, map):
        return key if num == key else list(map)[idx - 1]

    def get_factor(self, key, num):
        return (1 if int(str(num)[:1]) == key
                else abs(int(str(key)[:1]) - int(str(num)[:1])) + 1)

# conversion1 = RomanNumeral(125)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(124)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(500)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(2)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(3)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(4)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(5)
# print(conversion1.to_roman())

conversion1 = RomanNumeral(6)
print(conversion1.to_roman())

# conversion1 = RomanNumeral(9)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(27)
# print(conversion1.to_roman())

# conversion1 = RomanNumeral(48)
# print(conversion1.to_roman())