def string_to_integer(string):
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

    number_list = []
    current_iteration = 0
    for idx in range(len(string) - 1, -1, -1):
        current_iteration += 1

        match current_iteration:
            case 1:
                number_list.append(NUMBER_DICT[string[idx]] * 1)
            case 2:
                number_list.append(NUMBER_DICT[string[idx]] * 10)
            case 3:
                number_list.append(NUMBER_DICT[string[idx]] * 100)
            case 4:
                number_list.append(NUMBER_DICT[string[idx]] * 1000)

    return sum(number_list)

print(string_to_integer("4321") == 4321)  # True
print(string_to_integer("570") == 570)    # True