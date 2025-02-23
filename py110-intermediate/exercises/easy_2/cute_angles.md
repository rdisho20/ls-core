# Understand the Problem

**Inputs:** floating point number representing angle  

**Outputs:** string representing angle, minutes & seconds  

**Rules:**
- Explicit:
    - valid angles between 0 and 360
    - minutes and seconds between 0 and 59
    - 60 minutes in a degree
    - 60 seconds in a minute
- Implicit:
    - angles, minutes and seconds are integers

# Data Structure

Use a dictionary to store factor values of minute and second:
```
FACTOR_DICT = {
    'min': 60,
    'sec': 3600
}
```

# Algorithm

**High Level:**
- Given a floating point number, get the degree by converting it to an integer then into a string
- Get minutes by subtracting the degree integer from original floating point number in order to get floating point value to multiply by `60` (minutes)
- Convert minutes to an integer then to a string
- Get seconds by subtracting minutes integer from minutes floating point number to multiply by `3600` (seconds) divided by `60`
- Convert seconds to integer then to a string

### Starting w/:

- Input floating point # `float`
- Dictionary w/ conversion numbers assigned to `FACTOR_DICT`

### Step 1:

- Assign `float` converted to an integer to the variable named `degree`
- Using `degree`, subtract from `float` to get `degree_factor`

### Step 2:

- Multiply `degree_factor` by `FACTOR_DICT['min']` and assign the value to `minutes_float`
- Convert `minutes_float` to an integer and assign that value to `minutes`
- Subtract `minutes` from `minutes_float` and assign that value to `minutes_factor`

### Step 3:

- Using `minutes_factor`, multiply by `FACTOR_DICT['sec']` then divide by `FACTOR_DICT['min']` assigning that value to `seconds_float`
- Convert `seconds_float` to integer assigning that value to `seconds`

### Step 4:

- Return formatted f-string...

---

### Special Notes:

f-strings have 'presentation types' for **integers** and **floats**.
- `d` decimal integer, outputs base 10
    - *ie* `:02d`
        - `0` - pad w/ leading zeros
        - `2` - minimum width of 2 digits
        - `d` - int (decimal) formatting
- `f` fixed point notation
    - *ie* `:.2f`
