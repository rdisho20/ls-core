def split_string(string):
    new_string = ''
    if '-' in string or '+' in string:
        new_string += string[1:]

        return new_string

    return string

def string_to_signed_integer(string):
    NUMBER_DICT = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }

    working_string = split_string(string)

    number_list = []
    current_iteration = 0
    for idx in range(len(working_string) - 1, -1, -1):
        current_iteration += 1

        match current_iteration:
            case 1:
                number_list.append(NUMBER_DICT[working_string[idx]] * 1)
            case 2:
                number_list.append(NUMBER_DICT[working_string[idx]] * 10)
            case 3:
                number_list.append(NUMBER_DICT[working_string[idx]] * 100)
            case 4:
                number_list.append(NUMBER_DICT[working_string[idx]] * 1000)
    
    if '-' in string:
        return sum(number_list) * -1

    return sum(number_list)

print(string_to_signed_integer("4321") == 4321)  # True
print(string_to_signed_integer("-570") == -570)  # True
print(string_to_signed_integer("+100") == 100)   # True