# A balanced number is a number where the sum of digits to the left of the 
# middle digit(s) equals the sum of digits to the right of the middle digit(s).
# For example, 1234321 is balanced (1+2+3 = 3+2+1)
# Write a function that determines if a number is balanced.

def is_balanced_number(number):
    number = str(number)
    digit_lst = [int(num) for num in number]
    digit_lst_length = len(digit_lst)

    if digit_lst_length % 2 == 0:
        half = digit_lst_length // 2
        return sum(digit_lst[:half]) == sum(digit_lst[half:])
    else:
        half = digit_lst_length // 2
        return sum(digit_lst[:half]) == sum(digit_lst[half+1:])

print(is_balanced_number(1234321) == True)
print(is_balanced_number(12345) == False)  # Middle digit is 3, left sum (1+2) = right sum (4+5)
print(is_balanced_number(123456) == False) 
print(is_balanced_number(1221) == True)  # No middle digit, left sum (1+2) = right sum (2+1)


'''
input: number
output: boolean

rules:
- exp:
-- sum of digits to left of middle == sum of digits to right of middle
- imp:
-- balanced number can have no middle digit

Data structure: list of numbers => for slicing

Algo:
Hgh lvl:
- Given an input number, determine it's middle digit
- If there is no middle digit, then the left and right digit counts will equal the length (even number) of input number
- for each number left of the middle digit, get the sum
- for each number right of the middle digit, get the sum

- IF they are equal, then return True
- ELSE return False

Lw lvl:
- Start w/ input number converted to a string, with each digit converted back to a number using a comprehension
-- comprehension is assinged to 'digit_lst'
- length of digit list assigned to 'digit_lst_length'

Step 1:
- IF the 'digit_lst_length' is even, FLOOR divide it by 2 assign quotient to 'half'
-- sum the slice 'digit_lst[:half]' and check its equality w/ sum of the slice 'digit_lst[half:]'
--- IF equal return True, otherwise False

- IF 'digit_lst_length' is odd, FLOOR divide by 2 assign quotient to 'half'
-- sum slice 'digit_lst[:half+1]' and check equality w/ sum of slice 'digit_lst[half+1:]'
--- IF equal return True, otherwise False


'1221' -> even so [:half] == '12' and [half:] == '21'
'12345' -> odd so [:half] == '12' and [half+1] == '45'


'''