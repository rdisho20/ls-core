# Understand Problem

**Inputs:** a string consisting of 0 or more space-seperated words  

**Outputs:** a dictionary that shows number of words of different sizes  

**Rules:**
- Explicit:
    - key in dictionary represents word character length
    - value of each key is the amount of words with length of corresponding key
    - a word can include any character, only seperated by spaces

# Data Structure

Using a list where each element is a word from the string minus any whitespace characters

# Algorithm

**High Level**  
- Given a string of words, convert the words to a list minus 
whitespace assigned to object reference `words_list`
- For each word in `words_list`, get the length of the string and 
create a key w/ that value in dictionary `words_count_dict`
- Assign that key an integer value of `1`, then increment that value by `1` 
if there is another word of the same length as the corresponding key

### Starting w/

- Given string
- empty dictionary called `words_count_dict`

### Step 1:

- convert the string to a list using `' '` as a delimiter and assigned 
to object reference `words_list`

### Step 2:

- for every word length in `words_list`, create a dictionary key w/ that value
- anytime a key is created, set its corresponding value to `1`
- if a key exists already increment its value by `1`

### Step 3:

- after iteration is complete, return `words_count_dict`