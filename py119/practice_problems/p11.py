def repeated_substring(string):
    first_char = string[0]
    repeated_count = 0
    pattern = ''

    for idx in range(1, len(string)):
        if idx == len(string) - 1:
            try:
                string[idx + 1]
            except IndexError:
                if not pattern:
                    pattern = string[0:idx + 1]

        elif string[idx] == first_char:
            repeated_count += 1
            if repeated_count == 1:
                pattern = string[0:idx]
    
    return (pattern, string.count(first_char))


print(repeated_substring('xyzxyzxyz') == ('xyz', 3))
print(repeated_substring('xyxy') == ('xy', 2))
print(repeated_substring('xyz') == ('xyz', 1))
print(repeated_substring('aaaaaaaa') == ('a', 8))
print(repeated_substring('superduper') == ('superduper', 1))