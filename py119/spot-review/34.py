# Create a function that turns a string into a Wave. You will be passed a string
# and you must return that string in an array where an uppercase letter is a person standing up.

def wave(string):
    string_list = [''.join(s_char.upper()
                           if s_idx == idx and s_char.isalpha() else s_char
                           for s_idx, s_char in enumerate(string))
                    for idx, char in enumerate(string) if char.isalpha()]
    
    return string_list


print(wave("hello") == ["Hello", "hEllo", "heLlo", "helLo", "hellO"])
print(wave("") == [])
print(wave("two words") == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"])
print(wave(" gap ") == [" Gap ", " gAp ", " gaP "])


'''  
# Create a function that turns a string into a Wave. You will be passed a string
# and you must return that string in an array where an uppercase letter is a person standing up.


def wave(string):
    string_list = []

    for idx, char in enumerate(string):
        if not char.isalpha():
            continue

        new_string = ''

        for s_idx, s_char in enumerate(string):
            if idx == s_idx and s_char.isalpha():
                new_string += s_char.upper()
            else:
                new_string += s_char

        string_list.append(new_string)

    return string_list


print(wave("hello") == ["Hello", "hEllo", "heLlo", "helLo", "hellO"])
print(wave("") == [])
print(wave("two words") == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"])
print(wave(" gap ") == [" Gap ", " gAp ", " gaP "])
'''