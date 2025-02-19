# Given int `avail_cubes`, return left over blocks

## Task 4

- based on `avail_cubes` get appropriate square -> work w/ **new problem**
    - if `avail_cubes` % `square` == `avail_cubes`
        - then `avail_cubes` % `prev_square` == return `remainder_result`
    - otherwise if `avail_cubes` & `square` == `0`
        - then return `0`

---

#### New Problem
**Understanding**  
Input: `avail_cubes`  
Output: `square`, `prev_square`  

Explicit:
- must be a square: 2, 4, 9, 16, 25 etc.

Implicit:
- checking each available square within range 1 - `avail_cubes` to get outputs

**Data Structure**  
For Loop  
`for i in range(1, avail_cubes, i**2)`

**Algorithm**
```
for i in range(1, avail_cubes, i**2):
    # `avail_cubes` used in order to find greatest square in range
    # if `i` is less than or equal to `avail_cubes:
        # assign current index `i` to `square`
    # after loop finishes, a value will be assigned to `square` -> later use
```

---

# LS solution

**Higher level Algo**  
1. Build the structure one layer at a time until you no longer
   have enough blocks left to build a "valid" layer.
2. Count how many blocks you have left.

**Programmatic Algo**  
1. Start with:
    - The "number of blocks remaining" is equal to the input.
    - The "current layer number" is layer 0.

2. Calculate the "current layer number" for the next layer by
   adding 1 to the "current layer number".

3. Using the new "current layer number", calculate the "number of
   blocks required in this layer" by multiplying the "current
   layer number" by itself.

4. Determine whether the "number of blocks remaining" is greater
   than or equal to the "number of blocks required in this layer".
    - If there are enough blocks:
        - Subtract the "number of blocks required in this layer"
           from the "number of blocks remaining".
        - Go to step 2.
    - If there aren't enough blocks:
        - Return the "number of blocks remaining".

# My Reflection

**How does LS algorithm compare to yours?**  
- higher level of abstraction
- no code
- longer, simpler, more detailed
- No new additional problems, all covered in ordered steps
- My algo is more formal pseudo-code than informal.