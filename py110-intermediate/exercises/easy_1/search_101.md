# Understanding Problem

**Inputs:** 6 numbers from user  

**Outputs:** printed string describing whether 6th number appears amongst first 5  

**Rules:**
- Explicit:
    - None
- Implicit (answers to following questions):
    - 6th number appearing first can be a partial appearance?
        - *ie* 6 in 76 or 25 in 125?
    - positive and/or negative numbers as input?
    - integers and/or floats as input?
    - **Assumptions (because no interview or colleague):**
        1. 6th number must be exact (same #) to have *appeared*
        2. positive <u>integers</u> only

# Examples / Test Cases

```
print(search_first_5([1, 2, 3, 5, 8, 9]))           # 9 is not in...
print(search_first_5([25, 33, 40, 32, 112, 5]))     # 5 is not in...
print(search_first_5([25, 33, 42, 1, 52, 25]))      # 25 is in...
print(search_first_5([0, 100, 22, 30, 105, 10]))    # 10 is not in...
```

# Data Structure

`list` because I can append each input, and if there are duplicate inputs 
a list works as opposed to a `set` which won't because it only stores unique values.

# Algorithm

- Start w/ empty list `number_list`

### Step 1:
- Ask for user input `"Enter a positive whole number: "` and append the input to `number_list`
    - If the input <u>cannot</u> be converted to an integer, ask again `"Please try again: "`
    - repeat this process 5 more times

### Step 2:
- Given `number_list` now with 6 positive interger elements, see if the last element in the list is equal to any of the first 5
    - For each element in the list, check if the element equals the last element in the list
        - if the `current_index` is equal to `5`, the 6th element's index, return the string `"{last_element} is not in {numbers_list}"`
        - otherwise, if the `last_element` is equal to the `current_element` return the string `"{last_element} is in {number_list}"`

