def repeated_substring(string):
    str_set = set(string)
    set_len = len(str_set)
    str_len = len(string)
    sub_str = ''

    if string.count(string[0]) == str_len / set_len:
        for idx in range(0, set_len):
            sub_str += string[idx]
    
    else:
        return (string, 1)
    
    return (sub_str, str_len // set_len)


print(repeated_substring('xyzxyzxyz') == ('xyz', 3))
print(repeated_substring('xyxy') == ('xy', 2))
print(repeated_substring('xyz') == ('xyz', 1))
print(repeated_substring('aaaaaaaa') == ('a', 8))
print(repeated_substring('superduper') == ('superduper', 1))