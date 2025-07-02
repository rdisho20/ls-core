'''
P-
input: letter
output: print diamond shape of letters

E-rules:
prints diamond starting w/ "A"
    supplied letter @ widest point
first & last row contain 1 A
all in between rows w/ exactly two identical letters
vertically & horizontally symmetric
width == height
top half letters in ascending order
bottom half letters in descending order

I-rules:
No lowercase letter inputs allowed

D-
utilize vertical & horizontal symmetry
    given position of widest point letter (input)
    in alphabet, subtract 1 from index position,
    == top & bottom height
    widest point == (index position * 2) - 3
    ie F idx posit == 6, len = 11 - 2 cuz 2 Fs (9 spaces)

use dictionary -> map spaces values -> get lines -> printing
OR append to list, then when printing lines get index position (.index())
    for each letter

#### STILL NEED -> GET LEFT SPACES
for every line built from the middle (2 lines, top & bottom)
    increment 'total_spaces_from_left' by 1
    append 'total_spaces_from_left' to line's final string

NOUNS & VERBS
N-
Widest (Point) Length

A-
If 'letter' is "A" print "A"
    (OR maybe append to 'diamond_list'?)
Otherwise
    append A -> 'diamond_first_half'
    for each letter starting w/ B idx position up to input letters index position + 1
        get spaces by (index position * 2) - 3
        append f"{letter}{" " * ((idx * 2) - 3)}{letter}"
    
    copy the list popped then reverse assigned to 'diamond_second_half'

    get index position of input letter assigned to "input_letter_position"
    THEN, for each line in 'diamond_first_half'
        subtract current letter's index position from "input_letter_position"
        print the line with that many spaces inserted in front
    
    FINALLY, for each line in 'diamond_second_half' reversed
        subtract current letter's index position from "input_letter_position"
        print the line with that many spaces inserted in front


A (get widest point)-
Given an input letter, find its index in ALPHABET

     A
    B B
   C   C
  D     D
 E       E
F         F
 E       E
  D     D
   C   C
    B B
     A

(center spaces)
B - posit = 2 => 4 - 3 = 1 space
C - posit = 3 => 6 - 3 = 3 space
D - posit = 4 => 8 - 3 = 5 space
E - posit = 5 => 10 - 3 = 7 space
F - posit = 6 => 12 - 3 = 9 space

'''

class Diamond:
    ALPHABET = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    @classmethod
    def make_diamond(cls, input_letter):
        if input_letter == "A":
            return input_letter
        else:
            input_letter_idx = cls.get_input_letter_idx(input_letter)
            
            diamond_first_half = cls.get_first_half(input_letter)
            
            diamond_second_half = cls.get_second_half(diamond_first_half)
            
            final_first = []
            for idx, line in enumerate(diamond_first_half):
                left_spaces = (input_letter_idx - 1) - idx
                final_first.append(f"{left_spaces * ' '}{line}")
            
            final_second = []
            for line in diamond_second_half:
                line_letter_posit = cls.ALPHABET.index(line[0])
                left_spaces = (input_letter_idx - 1) - line_letter_posit + 1
                final_second.append(f"{left_spaces * ' '}{line}")
            
            return '\n'.join(final_first + final_second)

    @classmethod
    def get_first_half(cls, input_letter):
        diamond_first_half = ['A']
        input_letter_idx = cls.get_input_letter_idx(input_letter)

        for idx in range(2, input_letter_idx + 1):
            middle_spaces = (idx * 2) - 3
            line = cls.get_line(cls.ALPHABET[idx], middle_spaces)
            diamond_first_half.append(line)
        
        return diamond_first_half
    
    @classmethod
    def get_second_half(cls, first_half):
        return first_half[-2::-1]
    
    @classmethod
    def get_input_letter_idx(cls, letter):
        return cls.ALPHABET.index(letter)
    
    @classmethod
    def get_line(cls, letter, spaces_count):
        return f"{letter}{' ' * spaces_count}{letter}"

'''
diamond = Diamond()

diamond.make_diamond("A")
print()
diamond.make_diamond("B")
print()
diamond.make_diamond("C")
print()
diamond.make_diamond("E")
print()
diamond.make_diamond("P")
print()
diamond.make_diamond("Z")
print()
'''

diamond = Diamond()
print(diamond.make_diamond("Z"))