#Write a function that takes a non-empty string `s` as input and finds the
#minimum substring `t` and the maximum number `k`, such that the entire string
#`s` is equal to `t` repeated `k` times.

def f(string):
    substr_counts = {}
    
    for main_idx in range(len(string)):
        for idx in range(main_idx, len(string)):
            sub_str = string[main_idx:idx + 1]

            substr_counts[sub_str] = substr_counts.get(sub_str, 0) + 1

    substrings = sorted(list(substr_counts.keys()), key=len)

    for substr in substrings:
        count = substr_counts[substr]

        if string == substr * count:

            return [substr, count]


print(f("ababab") == ["ab", 3]) # should return ["ab", 3]

print(f("abcabc") == ["abc", 2])  # Repeating pattern
print(f("aaa") == ["a", 3])       # Single character repetition
print(f("abcd") == ["abcd", 1])   # No repetition (string itself is the answer)

print(f("a") == ["a", 1])         # Single character string
print(f("aaaa") == ["a", 4])      # Multiple single character repetition
print(f("abab") == ["ab", 2])     # Even length pattern

print(f("abcabcabcabc") == ["abc", 4])   # Longer repetition
print(f("abcdefabcdef") == ["abcdef", 2])  # Longer pattern
print(f("xyzxyzxyz") == ["xyz", 3])     # Different characters

print(f("abcabcabc") == ["abc", 3])  # Longer nested

'''
input: non-empty string
output: list w/ minimum substring, and number of times substring is repeated

rules:
exp:
- input is non-empty string

Algorithm:
Hgh Lvl:
- First find all possible substrings,
-- add each substring to a 'substr_dictionary'
-- -> storing its number of appearences as the value
- starting with the substring w/ minimum length **********
-- check if it matches the formula -> string == substr * count
--- IF so, return a list [substr, count]

Low Lvl:
- Start w/ all possible substrings dictionary w/ counts assigned to 'substr_counts'

Step 1:
- create sorted list by substring length of all keys in 'substr_counts' assigned to 'substrings'

Step 2:
- For substr in list 'substrings'
-- <<since sorted list, checking from lowest length to longest length;>> 
-- <<returning first min substring that equals original string>>
-- <<which logically will have maximum number of counts among all other substrings>>
-- IF 'string' == 'substr' * 'substr_counts[substr]': (there will only be 1 correct option)
--- return [substr, substr_counts[substr]]

'''