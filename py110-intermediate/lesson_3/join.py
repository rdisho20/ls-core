def join_or(valid_choices, delim=', ', string='or'):
    result = []
    for idx, square in enumerate(valid_choices):
        if idx == len(valid_choices) - 2:
            result.append(str(square))
            result.append(f" {string} ")
        elif idx == len(valid_choices) - 1:
            result.append(str(square))
            break
        else:
            result.append(str(square))
            result.append(delim)

    return ''.join(result)


print(join_or([1, 2, 3]))               # => "1, 2, or 3"
print(join_or([1, 2, 3], '; '))         # => "1; 2; or 3"
print(join_or([1, 2, 3], ', ', 'and'))  # => "1, 2, and 3"
print(join_or([]))                      # => ""
print(join_or([5]))                     # => "5"
print(join_or([1, 2]))                  # => "1 or 2"