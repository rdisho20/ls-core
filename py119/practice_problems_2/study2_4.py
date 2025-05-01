# Create a function that takes a string containing only digits and returns
# the largest multiple of 3 that can be formed by rearranging the digits. 
# If no multiple of 3 can be formed, return an empty string.

def largest_multiple_of_three(string):
    combinations = []

    for digit in string:
        new_string = string

        for idx, digit in enumerate(new_string):
            pass




print(largest_multiple_of_three("8952") == "9852")  # 9852 is divisible by 3
print(largest_multiple_of_three("39") == "93")  # 93 is divisible by 3
print(largest_multiple_of_three("5") == "")  # 5 is not divisible by 3
print(largest_multiple_of_three("333") == "333")
print(largest_multiple_of_three("911") == "")  # No multiple of 3 can be formed


'''
input: string of digits
output: string, largest multiple of 3 can be formed by rearranging digits

rules:
exp:
- if no multiple of 3 can be formed, return empty string
imp:
- input string will have at least 1 digit

data structure: a list of strings

How do I get this list of strings?


8952
combinations where 8 is first - 8952, 8925, 8295, 8259, 8529, 8592
9 is first - 9852, 
5 is first - 5892, 5829, 5289, 5298, 5928

'''