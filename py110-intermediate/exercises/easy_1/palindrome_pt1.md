# Understanding Problem

**Inputs:** string  

**Outputse:** `True` value if palindrome, otherwise `False`  

**Rules:**
- Explicit:
    - case matters *ie* Dad & dad not palindrome
    - all characters matter
- Implicit:
    - all characters include:
        - alphabetic
        - numeric
        - symbols
        - whitspace
        - international
    - input string can be an amalgamation of all catergories of characters listed above

# Examples / Test Cases

*Provided by LS*

# Data Structure

A good data structure is one that can be reversed and iterated upon, therefore a text sequence 
(same as input) should suffice.

# Algorithm

**High Level**  
- Given a string, in order to check if it is a palindrome, reverse the string & 
check it against the original string character-by-character.

### Start with:
- Input `string` provided by program test cases

### Step 1:
- reverse input string and assign it to object reference `reversed_string`

### Step 2:
- for every character in `string` check...
    - if the character in `string` <u>does not equal</u> the character in `reversed_string`, return `False`
- Outside loop, since `False` has not returned, that must mean `string` is a palindrome, 
therefore return `True`