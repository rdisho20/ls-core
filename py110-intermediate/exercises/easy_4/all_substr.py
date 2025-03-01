def substrings(string):
    return [string[idx:sub_idx + 1]
            for idx in range(len(string))
            for sub_idx in range(idx, len(string))]

expected_result = [
    "a", "ab", "abc", "abcd", "abcde",
    "b", "bc", "bcd", "bcde",
    "c", "cd", "cde",
    "d", "de",
    "e",
]

print(substrings('abcde') == expected_result)  # True