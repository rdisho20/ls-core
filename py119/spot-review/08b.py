#Write a function that takes a non-empty string `s` as input and finds the
#minimum substring `t` and the maximum number `k`, such that the entire string
#`s` is equal to `t` repeated `k` times.

def f(string):
    all_possibles = {}
    
    for main_idx in range(len(string)):
        for idx in range(main_idx, len(string)):
            sub_str = string[main_idx:idx + 1]

            if len(sub_str) > 1:
                all_possibles[sub_str] = all_possibles.get(sub_str, 0) + 1


    for substr, count in all_possibles.items(): # needs to check more stuff
        if string == substr * count:

            return [substr, count]


print(f("ababab") == ["ab", 3]) # should return ["ab", 3]


'''
input: non-empty string
output: list w/ minimum substring, and number of times substring is repeated

rules:
exp:
- input in non-empty string
imp:
- minimum substr at least 2 characters

Algorithm:
Hgh Lvl:
- First find all possible substrings,
-- add each substring to a 'result_list'
-- For each substring in that 'result_list'
--- check number of times appears in 'input_string',
--- for each value check if s (input_str) = t (substr) * k (count)

Low Lvl:
- Start w/ all possible substrings dictionary (substrings length > 1) w/ counts
- For substr, count in 'all_possibles'
-- if 'string' == substr * count: (there will only be 1 correct option)
--- return [substr, count]
'''