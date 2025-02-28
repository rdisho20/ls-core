# Understand the Problem

**Inputs:** a string, time of day in military time  

**Outputs:** integer, number of minutes b4 & after midnight  

**Rules:**
- Explicit:
    - 2 functions
    - return integer in range of `0 - 1439`
    - cannot use `datetime` module
- Implicit:
    - 24 hr format is `00:00` (hours, minutes)

# Algorithm

**High Level:**
- For each input, get integer types for `hours` and `minutes`
- Calculate number of minutes using `hours` and `minutes` and return the integer

## for `after_midnight()`:

### Starting w/
- Input `time_string`
- Minutes in day `1440`

### Step 1:
- Slice input `time_string` for hours and convert to an integer assigning to variable `hours`
- Do the same for `minutes`

### Step 2:
- For `total_minutes`, multiply `hours` by `60` and add `minutes`; return `total_minutes`

## for `before_midnight()`:

### Step 1:
- repeat previous 'Step 1'

### Step 2:
- For `total_minutes`, multiply `hours` by `60` and add `minutes` all subtracted by `1440`; return `total_minutes`