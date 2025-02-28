# Understand the Problem

**Inputs:** string  

**Outputs:** string  

**Rules:**
- Explicit:
    - Every character is doubled
- Implicit:
    - Input string can be empty
    - Only letters if string isn't empty
    - Each duplicate letter appears after original as opposed to any other formatting

# Algorithm

**High Level:**  
- Given a string, for each character in the string, double it and concatinate the characters to the result string `result`

### Starting w/
- empty string `result`

### Step 1:
- For each character in `string`, concatinate it twice to `result`

### Step 2:
- If `string` is empty, return `string` as-is

### Step 3:
- return `result`