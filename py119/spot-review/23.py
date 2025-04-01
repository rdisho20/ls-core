# Write a function `longest(s)` that finds and returns the longest substring of
# `s` where the characters are in alphabetical order.
def longest(string):
    final_list = []

    if len(string) == 1:
        return string
    
    curr_sub_str = ''
    for idx, char in enumerate(string):
        if curr_sub_str == '':
            curr_sub_str += char
        else:
            prev_char = string[idx - 1]

            if char >= prev_char:
                curr_sub_str += char

                # account for valid sub string at end of string
                try:
                    string[idx + 1]
                except IndexError:
                    final_list.append(curr_sub_str)
                    break

            elif char < prev_char:
                final_list.append(curr_sub_str)
                curr_sub_str = char # reset current string if character is less than previous character

    final_list.sort(key=len, reverse=True)

    return final_list[0]


print(longest('asd'))                  # should return 'as'
print(longest('nab'))                  # should return 'ab'
print(longest('abcdeapbcdef'))         # should return 'abcde'
print(longest('asdfaaaabbbbcttavvfffffdf')) # should return 'aaaabbbbctt'
print(longest('asdfbyfgiklag'))        # should return 'fgikl'
print(longest('z'))                # should return 'z'
print(longest('zyba'))                 # should return 'z'