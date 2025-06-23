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
given letters position in alphabet string, use number to
handle calculations for spacing of width @ widest point
    could use dictionary to help making a list to handle
    each print line building outwards top and bottom <- center

NOUNS & VERBS
N-
Widest (Point) Length

A-
If 'letter' is "A" print "A"
    (OR maybe append to 'diamond_list'?)
Otherwise
    For each letter (exluding "A") up to and including the input letter
        get 'current_line_width' by subtracting 'spaces_count' from the 'widest_length'
            divide 'current_line_width' by 2 for left and right spaces
        append the string f"{left}{letter}{spaces}{letter}{right}" to 'diamond_list'

join the list for both top and bottom with a new line (\n)
    top is 'diamond_list' and bottom is 'diamond_list'[::-1]
    strip the last new line .strip(\n) or .rstrip(\n)?

print the joined list

A (get widest point)-
Given an input letter, find its index in ALPHABET

'''

class Diamond:
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    spaces = {letter: space_count
                  for space_count, letter in enumerate(ALPHABET)}
    
    @classmethod
    def display(cls, input_letter):
        if input_letter == "A":
            print(input_letter)

        else:
            diamond_list = []

            widest_length = cls.get_widest_length(input_letter)
            spaces_between = cls.get_spaces_between(input_letter)
            print(widest_length)
            print(spaces_between)
            for spaces, letter in enumerate(cls.ALPHABET[1:widest_length + 1]):
                current_line_width = abs(spaces - widest_length)

                if current_line_width % 2 == 0:
                    l_r_spaces = current_line_width // 2
                if current_line_width % 2 == 1:
                    l_r_spaces = (current_line_width // 2)
                
                diamond_list.append(f"{" " * l_r_spaces}{letter}{" " * spaces}{letter}"
                                    f"{" " * l_r_spaces}")
                print(diamond_list)
    
    @classmethod
    def get_diamond_list(cls, letter):
        pass
    
    @classmethod
    def get_widest_length(cls, letter):
        spaces_between = cls.get_spaces_between(letter)
        return spaces_between + 2
    
    @classmethod
    def get_spaces_between(cls, letter):
        if letter == "B":
            return 1
        if letter == "C":
            return 3
        return cls.spaces[letter] + 1


diamond = Diamond()

# diamond.display("A")
# print()
# diamond.display("B")
# print()
diamond.display("C")
print()
diamond.display("E")
print()
