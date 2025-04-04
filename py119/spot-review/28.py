# Write a function that splits the string into pairs of two characters.
# If the string contains an odd number of characters, replace the missing second character of the final pair with an underscore ('_').

def solution(string):
    result_lst = []

    for idx in range(0, len(string), 2):
        try:
            if string[idx + 1]:
                result_lst.append(string[idx] + string[idx + 1])
        except IndexError:
            result_lst.append(string[idx] + '_')
    
    return result_lst


print(solution('abc') == ['ab', 'c_'])
print(solution('abcdef') == ['ab', 'cd', 'ef'])
print(solution("abcdef") == ["ab", "cd", "ef"])
print(solution("abcdefg") == ["ab", "cd", "ef", "g_"])
print(solution("") == [])