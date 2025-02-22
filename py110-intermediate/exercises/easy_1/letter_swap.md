# Understand the Problem

**Inputs:** string of words seperated by spaces  

**Outputs:** new string where first and last letters in each word are swapped  

**Rules:**
- Explicit:
    - every word contains at least 1 letter
    - the string will always contain at least 1 word
    - each string contains only words and spaces
    - no leading, trailing or repeating spaces
- Implicit:
    - letters swapped maintain case (case-sensitive)

# Data Structures

Since the string is immutable, I will need to use a list of elements, 
returning new strings, then joining them later.

# Algorithm

**High Level**  
- Given a string of words sepearted by whitespaces, first, 
create a list of words from the string.
- Second, for every word, swap the first and last letter, 
returning that value assigned to that index position
- Repeat as many times as needed.
- Join the new strings w/ a space and return the new string.

### Starting w/

- input string

### Step 1:

- split `string` and assign the list to a new object reference `words_list`

### Step 2:

- For every word in `words_list`
    - split word into `word`
    - store values at first index and last index in seperate variables 
    in order not to lose values during swap
    - set the first index to the last index value and the last index 
    to the first index value
    - join with an empty string `''.join(words_list)`