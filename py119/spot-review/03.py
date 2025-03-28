# Write a function that takes two strings as input, `full_text` and `search_text`,
# and returns the number of times `search_text` appears in `full_text`.
def solution(full_text, search_text):
    return full_text.count(search_text)

print(solution('abcdeb','b')) # should return 2 since 'b' shows up twice
print(solution('aaabbbcccc', 'bbb')) # should return 1
