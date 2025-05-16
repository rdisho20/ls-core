'''
input: iterable, delimiter, and conjunction
output: a string displaying each element of the iterable,
seperated by delimiter, and conjunction before last element


'''

def join_or(choices_list, seperator=', ', conjunction='or'):
    if len(choices_list) == 1:
        return choices_list[0]
    
    elif len(choices_list) == 2:
        return f"{choices_list[0]} {conjunction} {choices_list[1]}"

    list_for_joining = []

    for idx, item in enumerate(choices_list):
        if idx == len(choices_list) - 1:
            list_for_joining.append(f"{conjunction} {item}")
        else:
            list_for_joining.append(f"{item}{seperator}")

    return ''.join(list_for_joining)

join_or([1, 2])                   # => "1 or 2"
join_or([1, 2, 3])                # => "1, 2, or 3"
join_or([1, 2, 3], '; ')          # => "1; 2; or 3"
join_or([1, 2, 3], ', ', 'and')   # => "1, 2, and 3"
join_or([1])