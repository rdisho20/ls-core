# Given int `avail_cubes`, return left over blocks
## Task 4
- based on `avail_cubes` get appropriate square -> work w/ **new problem**
    - if `avail_cubes` % `square` == `avail_cubes`
        - then `avail_cubes` % `prev_square` == return `remainder_result`
    - otherwise if `avail_cubes` & `square` == `0`
        - then return `0`

### New Problem
**Understanding**
input: `avail_cubes`
output: `square`, `prev_square`

explicit:
- must be a square: 2, 4, 9, 16, 25 etc.

implicit:
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
