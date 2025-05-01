# Create a function that takes a list of integers and returns a new list
# where each element is replaced by the sum of its digits raised to the
# power of their respective positions (0-indexed) in the original number.
# For example, if the number is 425 at index 0, you would calculate 4^0 + 2^1 + 5^2 = 1 + 2 + 25 = 28.    

def digit_power_sums(lst):
    result = []

    for element in lst:
        total = 0
        element = str(element)

        for idx, digit in enumerate(element):
            total += (int(digit) ** idx)
        
        result.append(total)
    
    return result

print(digit_power_sums([423, 361, 589, 10]) == [12, 8, 90, 1])
print(digit_power_sums([]) == [])
print(digit_power_sums([5, 7, 1]) == [1, 1, 1])
print(digit_power_sums([12345]) == [701])
print(digit_power_sums([425]) == [28])


'''
input: list of integers
output: new list, each element replaced by sum of its digits raised -> power of respective positions

data structure: element -> string, iterate through string

Algortihgm
Hgh Lvl:
- For each element, convert to string
-- then for each int(digit), exponentiate by it's 'idx' position and add to 'total'
-- after each element has been added, add total to 'result' list

return result

'12345'

- 1^0 -> 1
- 2^1 -> 2 + 1
- 3^2 -> 9 + 2 + 1
- 4^3 -> 64 + 9 + 2 + 1
- 5^4 -> 625 + 64 + 9 + 2 + 1 = 701

'''