'''
Given a substring and a string, count the number of occurences substring appears in string
- assumptions: you may not use the .count() method
'''


print(substring_count("bab", "ababab"))      # 2
print(substring_count("a", "aaaaaa")         # 6
print(substring_count("bc", "abcabcabc")     # 3
print(substring_count("xyz", "xyz")          # 1
print(substring_count("zz", "zzzzzzzzzz")    # 5
print(substring_count("x", "ababababx")      # 1
print(substring_count("abc", "abcdabcd")     # 2
print(substring_count("ab", "abaaba")        # 2
print(substring_count("a", "a")              # 1