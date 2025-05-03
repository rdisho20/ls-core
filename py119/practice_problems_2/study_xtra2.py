'''Create a function called consecutive_duplicates that returns the number of distinct alphabetic characters and numeric digits that appear at least twice consecutively in the input string. Ignore case when counting alphabetic characters.'''

'''
input: string
output: integer; number of distinct characters appearing at least twice consecutively

E-rules
case in-sensitive for alphabetical characters
only count distinct characters that appear at least twice consecutively
I-rulese:
there can be punctuation BUT ignore it
assume input string will not be empty

Data structure: string as-is

A-
Given the input string
Start w/ empty list to track characters appearing consecutively
startr w/ count = 1

For each character in string starting at index 1
    if the character IS NOT alphanumeric: CONTINUE
    if the character is equal to the previous character
        increment count by 1
    if the character is NOT equal to previous character
        AND count greater than 1
            add previous character to the consecutive characters LIST
        reset count to 1
    
Turn LIST into set
Return the length of my consecutive characters SET

'''

def consecutive_duplicates(string):
    string = string.casefold()
    result = set()
    count = 1

    for idx in range(1, len(string)):
        char = string[idx]

        if not char.isalnum():
            continue
        
        elif char == string[idx - 1]:
            count += 1
        
        elif char != string[idx - 1]:
            if count > 1:
                result.add(string[idx - 1])
            count = 1

    return len(result)


# Examples:
print(consecutive_duplicates('aabbc12223') == 3) 
print(consecutive_duplicates('aBbCcDa') == 2) 
print(consecutive_duplicates('hello11world') == 2) 
print(consecutive_duplicates('programming') == 1)   
print(consecutive_duplicates('python3.9') == 0)


'''

programming
r, o, g, r, a, m, m, i, n, g


'''