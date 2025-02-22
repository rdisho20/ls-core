# Understand the Problem

**Inputs:** a string that's all digits  

**Outputs:** return string as an integer  

**Rules:**
- Explicit:
    - cannot use typecast functions *ie* `int()`
    - all characters are numeric
- Implicit:
    - numbers can be repeated
    - no empty string; has at least one character
    - assume no more than `9_000` int value

**Questions:**
- How should I deal with a string of numbers for converting to an integer w/o using typecase functions?
    - maybe by using a dictionary... `class bytes` to `my_str.encode()`

# Data Structure

A dictionary where each key is the string version of the digit and its value is the corresponding integer.  
```
# ie
{'0': 0, '1': 1, '2': 2, '3': 3 ...}
# etc
```

# Algorithm:

**High Level:**  
- given a string of digits, iterate down, first index position digit multiplied by 1 (ones position), if there's more, 2nd from right multiplied by 10 (tens position), w/ each value appended to `new_list`
- for each element in `new_list`, calculate the total of the elements & return that number using `sum()`

### Starting w/

- input string
- `number_list` assigned the value of an empty list `[]`

### Step 1:

- For each character, iterate backwards, multiply by its appropriate position... 1, 10, 100 or 1_000, mutating the list in place

### Step 2:

- sum all values in `number_list` using `sum()` and return value
